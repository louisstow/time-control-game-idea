var Viewport = {
	width: 320,
	height: 480,

	follow: function (entity, world) {
		entity.bind("Change", function () {
			var newX = -this.x + Crafty.viewport.width / 2;
	 		var newY = -this.y + Crafty.viewport.height / 2;

	 		// make sure the viewport keeps in the world
	 		// boundary
	 		if (newX > 0) { newX = 0; }
	 		if (-newX + Viewport.width > world.width) {
	 			newX = -(world.width - Viewport.width);
	 		}

	 		if (newY > 0) { newY = 0; }
	 		if (-newY + Viewport.height > world.height) {
	 			newY = -(world.height - Viewport.height);
	 		}

	 		Crafty.viewport.x = newX;
	 		Crafty.viewport.y = newY;
		});
	}
}