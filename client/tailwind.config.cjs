/* https://github.com/tailwindlabs/tailwindcss-intellisense/issues/399 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "",
        secondary: "",
      },
    },
  },
  plugins: [],
};
