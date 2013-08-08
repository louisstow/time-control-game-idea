var game = new Game;
var WIDTH = 320;
var HEIGHT = 400;

window.onload = function () {
	Crafty.init(WIDTH, HEIGHT);
	Crafty.canvas.init();
	game.timeline = new Timeline({timeline: levels.lvl1.frames});

	init();
	initG();

	var startY = 0;

	function onMouseMove (e) {
		var diffY = startY - e.clientY;
		game.timeline.scrub(diffY);
		startY = e.clientY;
	}

	Crafty.addEvent(Crafty.stage.elem, "mousedown", function (e) {
		startY = e.clientY;
		Crafty.addEvent(Crafty.stage.elem, "mousemove", onMouseMove);
	});

	Crafty.addEvent(Crafty.stage.elem, "mouseup", function (e) {
		Crafty.removeEvent(Crafty.stage.elem, "mousemove", onMouseMove);
	});
}

function initG () {
	
	var ent = Crafty.e("2D, Canvas, Color").attr({w: 50, h: 50}).color("red").bind("EnterFrame", function (f) {
		var d = game.timeline.getFrame(game.timeline.frame);
		if (d) this.attr(d);
	});


	
}
