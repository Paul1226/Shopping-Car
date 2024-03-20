/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				playfair: ['Playfair Display Variable', 'serif'],
			},
			colors: {
				primary500: '#ff6d68',
				secondary950: '#490806',
				tertiary200: '#ffc9c750',
				tertiary200sn: '#ffc9c7',
				star: '#FFC244',
				buttonHover600: '#c41711',
				buttonActive800: '#a11813',
			},
			backgroundImage: {
				'hero':'url("/hero.jpg")',
				'deg': 'linear-gradient(to right, #741D51 0%, #E44E52 100%)',
			},

			gridTemplateColumns: {
				'3p': 'repeat(auto-fill, minmax(300px, 1fr))',
			},
			boxShadow: {
				'shadowCarrito': '0 0 10px 0 #22222250',
			},
		},
	},
	plugins: [],
}
