module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      boxShadow: {
        lift: "0 4px 8px rgba(0,0,0,0.1)"
      }
    }
  },
  variants: { extend: {} },
  plugins: []
};