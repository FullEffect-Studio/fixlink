/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './apps/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      height: {
        '100': '30rem',
        '120': '34rem',
        '140': '38rem',
      },
    },
  },

  daisyui: {
    themes: [
      {
        winter: {
          ...require("daisyui/src/colors/themes")["[data-theme=winter]"],
          primary: "#1d3b8a",
          accent: "#9e3e55"
        },
      },
    ],
  },

  plugins: [require('daisyui')],
};
