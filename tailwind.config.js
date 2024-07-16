/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '5': '20px', // defining padding top for navbar
        '25': '100px', // defining padding bottom for navbar
      },
    },
  },
  plugins: [],
}

