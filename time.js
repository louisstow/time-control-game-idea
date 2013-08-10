var WIDTH = 320;
var HEIGHT = 480;
var MAX_SPEED = 3;

window.onload = function () {
	Crafty.init(WIDTH, HEIGHT);
	Crafty.canvas.init();

	game = new Game();
}
