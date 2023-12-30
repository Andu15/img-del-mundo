module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: {
        "fluorescent-green": "#98F5E1",
        "medium-green": "#7DDCD3",
        "aqua-green": "#CBF3F0",
        "main": "#03045E",
        "secondary": "#0077B6",
        "other": "#00B4D8"
      },
      secondary: {
        "pasty-green": "#2EC4B6",
        "navy-blue" : "#293b49",
        "pinkish" : "#fdabaf",
        "main": "#2EC4B6",
        "secondary": "#90E0EF",
        "other": "#CAF0F8"
      },
      neutral: {
        "greenish-lead": "#B3C7C5",
        "soft-white": "#F9F9F9",
        "light-grey": "#F4F7F6",
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