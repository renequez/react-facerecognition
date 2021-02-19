export const initialProfile = {
	id: '',
	name: '',
	email: '',
	entries: 0,
	joined: '',
};

export const particleOptions = {
	particles: {
		number: {
			value: 60,
			density: { enable: true, value_area: 600 },
		},
		color: { value: '#ffffff' },
		shape: {
			type: 'circle',
			stroke: { width: 0, color: '#000000' },
			polygon: { nb_sides: 3 },
			image: { src: 'img/github.svg', width: 100, height: 100 },
		},
		opacity: {
			value: 0.5,
			random: false,
			anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
		},
		size: {
			value: 3,
			random: true,
			anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
		},
		line_linked: {
			enable: true,
			distance: 150,
			color: '#ffffff',
			opacity: 0.4,
			width: 1,
		},
		move: {
			enable: true,
			speed: 3,
			direction: 'none',
			random: false,
			straight: false,
			out_mode: 'out',
			bounce: false,
			attract: { enable: false, rotateX: 600, rotateY: 1200 },
		},
	},
	retina_detect: true,
};
