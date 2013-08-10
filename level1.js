levels["1"]["init"] = function (game) {
	
	var openFlag = false;
	Crafty.e("2D, Canvas, Color").attr({w: 80, y: 150, h: 400}).color("brown");
	Crafty.e("2D, Canvas, Color").attr({x: 200, w: 120, y: 150, h: 400}).color("brown");
	Crafty.e("2D, Canvas, Color").attr({x: 80, w: 120, y: 350, h: 200}).color("brown");

	button = Crafty.e("2D, Canvas, Color, Tween").attr({x: 120, w: 50, y: 340, h: 10}).color("green");
	bridge = Crafty.e("2D, Canvas, Color, Tween")
			.attr({x: 80, w: 120, y: 150, h: 20, rotation: 90})
			.color("grey");

	
	this.objects.player = Crafty.e("2D, Canvas, Color").attr({w: 50, h: 50}).color("red").bind("EnterFrame", function (f) {
		var d = game.timeline.getFrame(game.timeline.frame);
		if (d) this.attr(d);
	});


	game.addEvent(100, function () {
		if (!openFlag) {
			openFlag = true;
			bridge.tween({rotation: 0}, 100);
			button.tween({y: 350}, 30);
		}
	});

	game.addEvent(60, function () {
		
		if (openFlag) {
			game.timeline.timeline[2].next = 4;
			game.timeline.endFrame = game.timeline.lastFrame();
			//maxTick = lastFrame();
		}
	});

	game.addEvent(101, function () {
		console.log("FINISHED")
	});

};
