module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: {
        "main": "#03045E",
        "secondary": "#0077B6",
        "other": "#00B4D8"
      },
      secondary: {
        "main": "#2EC4B6",
        "secondary": "#90E0EF",
        "other": "#CAF0F8"
      },
      neutral: {
        "main": "#343a40",
        "secondary": "#6c757d",
        "other": "#ced4da",
        "light": "#f8f9fa"
      }
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"]
    },
    // screens: {
    //   "mobile" : "573px",
    //   "note" : "700px",
    //   "ipad" : "900px",
    //   "notebook" : "1050px",
    //   "laptop" : "1290px",
    //   "large": "1724px",
    //   "wide": "2098px",
    //   "ultrawide": "2560px"
    // },
    extend: {},
  },
  plugins: [],
}