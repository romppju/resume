/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transitionProperty: {
        height: 'height',
      },
      backgroundImage: {
        mountains: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0)), url('src/assets/icons/Mountains.jpg')`,
      },
    },
  },
  plugins: [],
}
