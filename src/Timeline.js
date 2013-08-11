function Layer (frames) {
	this.frames = frames;
	this.frame = 0;
	this.events = {};

	this.updateLastFrame();
}

Layer.prototype = {
	getCurrentFrame: function () {
		return this.getFrame(this.frame);
	},

	getFrame: function (frame) {
		var between = this.getFrameRange(frame, this.frames[1]);
		if (!between) { return null; }

		return this.interpolateFrames(between.from, between.to, frame);
	},

	getFrameRange: function (f, start) {
		var prev = this.frames[start.prev];
		var next = this.frames[start.next];

		if ((!prev || f >= prev.frame) && f <= start.frame) {
			return {
				from: prev || start,
				to: start
			}
		} else {
			if (next) {
				return this.getFrameRange(f, next);
			} else { return null; }
		}
	},

	interpolateFrames: function (from, to, frame) {
		var fromFrame = from.frame || 0;
		var toFrame = to.frame;
		var n = (frame - fromFrame) / (Math.max(1, toFrame) - fromFrame);
		var fromData = from.data || {};
		var toData = to.data || {};
		
		var lerped = {};
		for (var key in fromData) {
			lerped[key] = interpolate(
				fromData[key], 
				toData[key], 
				n, 
				to.easing
			);
		}

		return lerped;
	},

	lastFrame: function () {
		var lastFrame;
		var frame = this.frames[1];

		do {
			lastFrame = frame.frame;
		} while (frame = this.frames[frame.next]);

		return lastFrame;
	},

	updateLastFrame: function () {
		this.endFrame = this.lastFrame();
	},

	scrub: function (diffY) {
		// settings to tweak time
		if (this.frames.forward) {
			diffY = Math.abs(diffY);
		} else if (this.frames.backward) {
			diffY = -Math.abs(diffY);
		} else if (this.frames.invert) {
			diffY = -1 * diffY;
		}

		var currentFrame = clamp(this.frame | 0, 0, this.endFrame);
		var newFrame = clamp(this.frame + diffY | 0, 0, this.endFrame);
		var inc = currentFrame < newFrame ? 1 : -1;
		
		while (currentFrame !== newFrame + inc) {
			var cb = this.events[currentFrame | 0];
			if (cb) cb();
			currentFrame += inc;
		}
		
		this.frame += diffY;
		this.frame = clamp(this.frame, 0, this.endFrame);
	},
}

function Timeline (level) {
	this.level = level;
	this.layers = {};

	for (var key in level.layers) {
		this.layers[key] = new Layer(level.layers[key]);
	}

	this.events = {};
	this.endFrame = this.lastFrame();
	this.objects = level.objects;
}

Timeline.prototype = {
	endFrame: 0,

	getCurrentFrame: function (key) {
		return this.layers[key].getCurrentFrame();
	},

	getFrame: function (key) {
		return this.layers[key].getFrame(this.frame);
	},

	addEvent: function (key, f, cb) {
		this.layers[key].events[f] = cb;
	},

	fork: function (key, from, to) {
		this.layers[key].frames[from].next = to;
		this.layers[key].frames[to].prev = from;

		this.layers[key].updateLastFrame();
		this.updateLastFrame();
	},

	/**
	* Scrub through the global timeline
	* by a difference in frames
	*/
	scrub: function (diffY) {
		for (var key in this.layers) {
			this.layers[key].scrub(diffY);
		}
	},

	updateLastFrame: function () {
		this.endFrame = this.lastFrame();
	},

	lastFrame: function () {
		var maxFrame = -1;
		for (var key in this.layers) {
			if (this.layers[key].endFrame > maxFrame) {
				maxFrame = this.layers[key].endFrame;
			}
		}

		return maxFrame;
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