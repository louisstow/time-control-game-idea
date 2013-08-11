var levels = {
	1: {
		"frames": {
			1: {
				"next": 2,
				"prev": null,
				"frame": 0,
				"data": {
					"player": {
						"x": 0,
						"y": 140
					}
				}
			},

			2: {
				"prev": 1,
				"next": 3,
				"frame": 60,
				"data": {
					"player": {
						"x": 60,
						"y": 140
					}
				}
			},

			3: {
				"prev": 2,
				"next": null,
				"frame": 100,
				"easing": "sine",
				"data": {
					"player": {
						"x": 110,
						"y": 340
					}
				}
			},

			4: {
				"prev": 2,
				"next": null,
				"frame": 200,
				"data": {
					"player": {
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
					"next": null,
					"prev": 1,
					"frame": 200,
					"data": {
							"x": 370,
							"y": 480
					}
				}
			},

			"arrow": {
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
					"frame": 60,
					"data": {
						"x": 90,
						"y": 480
					}
				}
			}
		},
		"objects": {},
		"width": 700,
		"height": 600
	}
}
