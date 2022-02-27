module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        window: "height: calc(100vh - 100px);",
      },
    },
  },
  plugins: [],
};
