levels["1"]["init"] = function (game) {
	
	var openFlag = false;
	Crafty.e("2D, Canvas, Image").image("assets/bg/level-1.jpg");

	// interactive objects
	button = Crafty.e("2D, Canvas, Color, Tween").attr({x: 120, w: 50, y: 370, h: 10}).color("green");
	bridge = Crafty.e("2D, Canvas, Color, Tween")
			.attr({x: 60, w: 170, y: 190, h: 20, rotation: 90})
			.color("grey")
			.bind("TweenEnd", function () {
				game.paused = false;
			});

	
	this.objects.player = Crafty.e("2D, Canvas, Color").attr({w: 50, h: 50}).color("red");
	Viewport.follow(this.objects.player, this);

	game.addEvent(100, function () {
		if (!openFlag) {
			openFlag = true;
			bridge.tween({rotation: 0}, 50);
			button.tween({y: 380}, 30);
			game.paused = true;
		}
	});

	game.addEvent(60, function () {
		
		if (openFlag) {
			// change tracks
			game.timeline.timeline[2].next = 4;
			game.timeline.endFrame = game.timeline.lastFrame();
		}
	});

	game.addEvent(101, function () {
		console.log("FINISHED")
	});

};

levels["2"]["init"] = function (game) {
	Crafty.e("2D, Canvas, Image").image("assets/bg/level-2.jpg");
	this.objects.player = Crafty.e("2D, Canvas, player");
	Viewport.follow(this.objects.player, this)

	this.objects.arrow = Crafty.e("2D, Canvas, arrow");
};
