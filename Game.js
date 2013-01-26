
function Game () {}

Game.prototype = {
	frame: 0,
	endFrame: 0,
	timelines: [],

	init: function () {
		
	},

	/**
	* Scrub through the global timeline
	* by a difference in frames
	*/
	scrub: function (diffY) {
		var currentFrame = this.frame | 0;
		var newFrame = this.frame + diffY | 0;
		var inc = currentFrame < newFrame ? 1 : -1;

		while (currentFrame !== newFrame) {
			var cb = frameEvents[currentFrame | 0];
			if (cb) cb();
			currentFrame += inc;
		}
		
		this.frame += diffY;
		if (this.frame > this.endFrame) this.frame = this.endFrame;
		if (this.frame < 0) this.frame = 0;
	},

	step: function () {

	}
}