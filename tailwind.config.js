/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        customBackground: '#0E0F1A',
        customHeading: '#EEE5FF',
        customBlue: "#5E11FF",
        customOrange: "#F5731C",
        customOptionBox1: "#0D061F",
        customOptionBox2: "#241D34",
        customBorderTopColor: "#332C42",
        customBorderRightColor: "#272137",
        customParaColor: "#B4AEC4"
      },
      fontFamily: {
        paraFont: ['Outfit', 'sans-serif'],
        headingFont: ['Sora', 'sans-serif'], 
      },
      lineHeight: {
        'custom-line-height': '1.6',
      }
    },
  },
  plugins: [],
}
