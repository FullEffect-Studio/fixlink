/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './apps/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },

  daisyui: {
    themes: ["winter"],
  },

  plugins: [require('daisyui')],
};
