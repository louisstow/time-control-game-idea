var WIDTH = 320;
var HEIGHT = 480;
var MAX_SPEED = 3;

window.onload = function () {
	Crafty.init(WIDTH, HEIGHT);
	Crafty.canvas.init();

	Crafty.sprite(64, "assets/objects.png", {
		player: [0, 0],
		arrow: [1, 0]
	});

	game = new Game();
	game.loadLevel(2);
}
