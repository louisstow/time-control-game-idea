var levels = {
	1: {
		"frames": {
			1: {
				"next": 2,
				"prev": null,
				"frame": 0,
				"easing": "quad",
				"data": {
					"player": {
						"x": 0,
						"y": 100
					}
				}
			},

			2: {
				"prev": 1,
				"next": 3,
				"frame": 60,
				"easing": "quad",
				"data": {
					"player": {
						"x": 80,
						"y": 100
					}
				}
			},

			3: {
				"prev": 2,
				"next": null,
				"frame": 100,
				"easing": "quad",
				"data": {
					"player": {
						"x": 90,
						"y": 300
					}
				}
			},

			4: {
				"prev": 2,
				"next": null,
				"frame": 101,
				"easing": "quad",
				"data": {
					"player": {
						"x": 320,
						"y": 100
					}
				}
			}
		},

		"objects": {},
		"width": 320,
		"height": 600
	}
}
