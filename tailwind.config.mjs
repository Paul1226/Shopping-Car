/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display Variable", "serif"],
      },
      colors: {
        sucentOrange: {
          '50': "#fff1f1",
          '100': "#ffe1e0",
          '200': "#ffc9c7",
          '300': "#ffa29f",
          '400': "#ff6d68",
          '500': "#fb554f",
          '600': "#e8211a",
          '700': "#c41711",
          '800': "#a11813",
          '900': "#861a16",
          '950': "#490806",
        },
        cardBlur:'#ffffff20',
        star: '#F5C518',
      },
	  
      backgroundImage: {
        hero: 'url("/hero.jpg")',
        deg: "linear-gradient(to right, #741D51 0%, #E44E52 100%)",
      },

      gridTemplateColumns: {
        "3p": "repeat(auto-fill, minmax(300px, 1fr))",
      },
      boxShadow: {
        shadowCarrito: "0 0 10px 0 #22222250",
      },
    },
  },
  plugins: [],
};
