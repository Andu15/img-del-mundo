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
        "soft-white": "#F9F9F9"
      }
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"]
    },
    extend: {},
  },
  plugins: [],
}