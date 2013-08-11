levels["1"]["init"] = function (game) {
	
	var openFlag = false;
	// level objects
	Crafty.e("2D, Canvas, Color").attr({w: 80, y: 150, h: 400}).color("brown");
	Crafty.e("2D, Canvas, Color").attr({x: 200, w: 120, y: 150, h: 400}).color("brown");
	Crafty.e("2D, Canvas, Color").attr({x: 80, w: 120, y: 350, h: 200}).color("brown");

	// interactive objects
	button = Crafty.e("2D, Canvas, Color, Tween").attr({x: 120, w: 50, y: 340, h: 10}).color("green");
	bridge = Crafty.e("2D, Canvas, Color, Tween")
			.attr({x: 80, w: 120, y: 150, h: 20, rotation: 90})
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
			button.tween({y: 350}, 30);
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
