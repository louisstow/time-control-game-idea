var levels = {
	1: {
		"layers": {
			"player": {
				1: {
					"next": 2,
					"prev": null,
					"frame": 0,
					"data": {
						"x": 0,
						"y": 140
					}
				},

				2: {
					"prev": 1,
					"next": 3,
					"frame": 60,
					"data": {
						"x": 60,
						"y": 140
					}
				},

				3: {
					"prev": 2,
					"next": null,
					"frame": 100,
					"easing": "sine",
					"data": {
						"x": 110,
						"y": 340
					}
				},

				4: {
					"prev": 2,
					"next": null,
					"frame": 200,
					"data": {
						"x": 320,
						"y": 140
					}
				}
			}
		},

		"objects": {},
		"width": 320,
		"height": 480
	},

	2: {
		"layers": {
			"player": {
				1: {
					"next": 2,
					"prev": null,
					"frame": 0,
					"data": {
						"x": 0,
						"y": 480
					}
				},

				2: {
					"next": 3,
					"prev": 1,
					"frame": 200,
					"data": {
						"x": 370,
						"y": 480
					}
				},

				3: {
					"next": null,
					"prev": 2,
					"frame": 300,
					"data": {
						"x": 380,
						"y": 50
					}
				}
			},

			"arrow": {
				forward: true,

				1: {
					"next": 2,
					"prev": null,
					"frame": 0,
					"data": {
						"x": 100,
						"y": 370
					}
				},

				2: {
					"next": null,
					"prev": 1,
					"frame": 120,
					"data": {
						"x": 90,
						"y": 580
					}
				}
			},

			"arrow-2": {
				forward: true,

				1: {
					"next": 2,
					"prev": null,
					"frame": 0,
					"data": {
						"x": 170,
						"y": 370
					}
				},

				2: {
					"next": 3,
					"prev": 1,
					"frame": 70,
					"data": {
						"x": 170,
						"y": 370
					}
				},

				3: {
					"next": null,
					"prev": 2,
					"frame": 120,
					"data": {
						"x": 150,
						"y": 580
					}
				}
			}
		},
		"objects": {},
		"width": 700,
		"height": 600
	}
}
