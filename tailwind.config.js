/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  content: [],
  theme: {
    colors: {
      urliar: {
        1: '#E84545',
        2: '#53354A',
        3: '#903749',
        4: '#2B2E4A',
        gray: '#747474',
      },
    },
    extend: {
      height: {
        100: '100%',
      },
    },
  },
  plugins: [],
};
