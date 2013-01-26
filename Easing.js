var Easing = {
	linear: function (p) {
		return p;
	},

	sine: function (p) {
		return 1 - Math.cos(p * Math.PI / 2);
	},

	circ: function (p) {
		return 1 - Math.sqrt(1 - p * p);
	},

	elastic: function (p) {
		return p === 0 || p === 1 ? p :
						-Math.pow( 2, 8 * (p - 1) ) * Math.sin( ( (p - 1) * 80 - 7.5 ) * Math.PI / 15 );
	},

	quad: function (p) {
		return Math.pow(p, 2);
	}
};