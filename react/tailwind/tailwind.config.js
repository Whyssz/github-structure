/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      transitionTimingFunction: {
        DEFAULT: 'ease-in',
      },
      transitionDuration: {
        DEFAULT: '400ms',
      },
    },
  },
  plugins: [],
};
