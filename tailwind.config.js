/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'body-pattern': "url('./assets/img/pattern.png')",
      },
      colors: {
        'azul-claro': "#37bcf9",
        'azul-oscuro': "#0370b9"
      }
    },
  },
  plugins: [],
}
/* commit 2 */
/* commit 3 */