/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./Cine/src/main/resources/static/dist/*.{html,js}"],
	theme: {
		maxHeight: {
			"1/2": "50%",
			"3/4": "75%",
		},
		extend: {
			backgroundImage: {
				"radial-gradient":
					"radial-gradient(86.94% 47.67% at 50.02% 52.33%, #431B19 35.42%, #141414 73.96%)",
				"perfil-usuario":
					"url('./assets/img/fondoPerfil.jpeg')"
			},
			colors: {
				"Délicieux-au-Chocolat": "#431B19",
				"Sooty-Black": "#141414",
				"Piano-Black": "#1A1919",
				"Brown-Sugar": "#9C6D46",
				"Buckeye-brown": "#684A31",
				"Mulled-Cider": "#9c7d65ff",
				"White-Smoke": "rgba(247, 246, 245, 0.53)",
				'Buckskin-Brown': "#9C6D46",
			},
			gridTemplateColumns: {
				"15": "repeat(15, minmax(0, 1fr))",
			},
			keyframes:{
				rubberbrand: {
					'0%, 100%': {transform:'scale3d(1, 1, 1)'},
					'30%': {transform: 'scale3d(1.25, 0.75, 1)'},
					'40%': {transform: 'scale3d(0.75, 1.25, 1)'},
					'50%': {transform: 'scale3d(1.15, 0.85, 1)'},
					'65%': {transform: 'scale3d(0.95, 1.05, 1)'},
					'75%': {transform: 'scale3d(1.05, 0.95, 1)'},
				}
			},
			animation: {
				rubberbrand: 'rubberbrand 1s ease-in-out',
			},
		},
	},
	plugins: [],
};
