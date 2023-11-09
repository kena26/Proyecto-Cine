/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Cine/src/main/resources/static/dist/*.{html,js}"],
  theme: {
    maxHeight:{
      '1/2': '50%',
      '3/4': '75%',
    },
    extend: {
      backgroundImage: {
        'radial-gradient': 'radial-gradient(86.94% 47.67% at 50.02% 52.33%, #431B19 35.42%, #141414 73.96%)',
      },
    },
  },
  plugins: [],
}

