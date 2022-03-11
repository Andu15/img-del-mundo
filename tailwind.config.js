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
        "aqua-green": "#CBF3F0"
      },
      secondary: {
        "pasty-green": "#2EC4B6"
      },
      neutral: {
        "greenish-lead": "#B3C7C5",
        "soft-white": "#F9F9F9",
        "light-grey": "#F4F7F6"
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