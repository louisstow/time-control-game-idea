var game = new Game;
var WIDTH = 320;
var HEIGHT = 400;

window.onload = function () {
	game.init();
	Crafty.init(WIDTH, HEIGHT);
	Crafty.canvas.init();

	var startY = 0;

	function onMouseMove (e) {
		var diffY = startY - e.clientY;
		game.scrub(diffY);
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

function init () {
	
	var ent = Crafty.e("2D, Canvas, Color, Keyboard").attr({w: 50, h: 50}).color("red").bind("EnterFrame", function (f) {
		var d = dataFrame(ourTick);
		if (d) this.attr(d);
	});


	Crafty.e("2D, Canvas, Color").attr({w: 80, y: 150, h: 400}).color("brown");
	Crafty.e("2D, Canvas, Color").attr({x: 200, w: 120, y: 150, h: 400}).color("brown");
	Crafty.e("2D, Canvas, Color").attr({x: 80, w: 120, y: 350, h: 200}).color("brown");
	button = Crafty.e("2D, Canvas, Color, Tween").attr({x: 120, w: 50, y: 340, h: 10}).color("green");
	bridge = Crafty.e("2D, Canvas, Color, Tween")
		.attr({x: 80, w: 120, y: 150, h: 20, rotation: 90})
		.color("grey");
}
