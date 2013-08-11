function Game () {
	this.init();
}

Game.prototype = {
	timelines: {},
	start: 1,
	paused: false,

	onEnterFrame: function () {
		var objects = this.timeline.objects;
		
		// loop over moving objects and
		// interpolate their properties
		for (var key in objects) {
			var d = this.timeline.getCurrentFrame(key);
			if (d) objects[key].attr(d)
		}
	},

	init: function () {
		var startY = 0;
		var self = this;

		// handle mouse moves
		function onMouseMove (e) {
			var diffY = startY - e.clientY;
			startY = e.clientY;

			// don't take input until unpaused
			if (self.paused) { return; }

			if (Math.abs(diffY) > MAX_SPEED) { 
				diffY = diffY > 0 ? MAX_SPEED : -MAX_SPEED; 
			}

			self.timeline.scrub(diffY);
			
			self.onEnterFrame();
		}

		// listen to mouse events
		Crafty.addEvent(Crafty.stage.elem, "mousedown", function (e) {
			startY = e.clientY;
			Crafty.addEvent(Crafty.stage.elem, "mousemove", onMouseMove);
		});

		Crafty.addEvent(Crafty.stage.elem, "mouseup", function (e) {
			Crafty.removeEvent(Crafty.stage.elem, "mousemove", onMouseMove);
		});

		//this.loadLevel(this.start);	
	},

	loadLevel: function (num) {
		this.timelines[num] = new Timeline(levels[num]);

		this.timeline = this.timelines[num];
		levels[num].init(this);
		this.onEnterFrame(); // first render of objects
	},

	addEvent: function () {
		this.timeline.addEvent.apply(this.timeline, arguments);
	}
}