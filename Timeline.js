function Timeline (opts) {
	this.timeline = opts.timeline;
	this.events = {};
	this.easing = opts.easing || Easing.linear;
}

Timeline.prototype = {
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
				return getFrame(f, next);
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
	}
};

function interpolate(from, to, n, ease) {
	ease = ease || 'linear';
	return from + (to - from) * easing[ease](n);
}