var openFlag = false;



addFrameEvent(101, function () {
	console.log(100)
	if (!openFlag) {
		openFlag = true;
		bridge.tween({rotation: 0}, 100);
		button.tween({y: 350}, 30);
	}
});

addFrameEvent(60, function () {
	console.log(60)
	if (openFlag) {
		currentLevel[2].next = 4;
		maxTick = lastFrame();
	}
});
