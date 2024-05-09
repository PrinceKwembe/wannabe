/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
      brand: "rgb(var(--color-brand) / <alpha-value>)",
      alt: "rgb(var(--color-alt) / <alpha-value>)",}
    },
    container: {
      center: true,
      padding: '2.5rem',
    }
  },
  plugins: [],
}

