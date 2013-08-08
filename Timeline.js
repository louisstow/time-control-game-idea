function Timeline (opts) {
	this.timeline = opts.timeline;
	this.events = {};
	this.easing = opts.easing || "linear";
	this.endFrame = this.lastFrame();
}

Timeline.prototype = {
	frame: 0,
	endFrame: 0,

	getFrame: function (frame) {
		var between = this.getFrameRange(frame);
		if (!between) return null;
		return this.interpolateFrames(between.from, between.to, frame);
	},

	getFrameRange: function (f, start) {
		start = start || this.timeline[1]; //assume frame 1 exists
		var prev = this.timeline[start.prev];
		var next = this.timeline[start.next];

		if ((!prev || f >= prev.frame) && f <= start.frame) {
			return {
				from: prev || start,
				to: start
			}
		} else {
			if (next)
				return this.getFrameRange(f, next);
			else return null;
		}
	},

	interpolateFrames: function (from, to, frame) {
		var fromFrame = from.frame || 0;
		var toFrame = to.frame;
		var n = (frame - fromFrame) / (Math.max(1, toFrame) - fromFrame);

		var lerped = {};
		for (var key in from.data) {
			lerped[key] = interpolate(from.data[key], to.data[key], n, this.easing);
		}

		return lerped;
	},

	lastFrame: function () {
		var lastFrame;
		var frame = this.timeline[1];

		do {
			lastFrame = frame.frame;
		} while (frame = this.timeline[frame.next]);

		return lastFrame;
	},

	addEvent: function (f, cb) {
		this.events[f] = cb;
	},

	/**
	* Scrub through the global timeline
	* by a difference in frames
	*/
	scrub: function (diffY) {
		var currentFrame = clamp(this.frame | 0, 0, this.endFrame);
		var newFrame = clamp(this.frame + diffY | 0, 0, this.endFrame);
		var inc = currentFrame < newFrame ? 1 : -1;
		console.log(currentFrame, newFrame, inc)
		while (currentFrame !== newFrame + inc) {
			var cb = this.events[currentFrame | 0];
			if (cb) cb();
			currentFrame += inc;
		}
		
		this.frame += diffY;
		this.frame = clamp(this.frame, 0, this.endFrame);
	}
};

function interpolate(from, to, n, ease) {
	ease = ease || 'linear';
	return from + (to - from) * Easing[ease](n);
}

//clamp x between m and n
function clamp (x, m, n) {
	return Math.max(Math.min(x, n), m);
}