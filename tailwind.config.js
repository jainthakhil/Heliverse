/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        customBackground:'#0E0F1A',
        customHeading:'#EEE5FF',
        customBlue:"#5E11FF"
      }
    },
  },
  plugins: [],
}

