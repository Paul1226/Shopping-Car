/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				playfair: ['Playfair Display Variable', 'serif'],
			},
			colors: {
				primary: '#FB554F',
				secondary: '#444',
				cardBlur: '#ffffff20',
				star: '#FFC244',
				button: '#33C3F0',
			},
			backgroundImage: {
				'hero':'url("/hero.jpg")',
				'deg': 'linear-gradient(to right, #741D51 0%, #E44E52 100%)',
			},

			gridTemplateColumns: {
				'3p': 'repeat(auto-fill, minmax(300px, 1fr))',
			},
		},
	},
	plugins: [],
}
