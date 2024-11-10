/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      colors: {
        "smoky-black": '#14110F',
        "jet": '#34312D',
        "nissan-gray": '#7E7F83',
        "dun": '#D9C5B2',
        "anti-white": '#F3F3F4'
      },
      fontFamily: {
        serif: ['DM Serif Display', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
    }
    
  },
  plugins: [],
}