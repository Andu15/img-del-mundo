module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js}"],
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}