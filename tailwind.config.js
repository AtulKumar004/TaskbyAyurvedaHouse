/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      transitionProperty: {
        "width":"width"
      },
      display:["div-hover"],
    },
    variants:{ width:["responsive", "hover", "width"]},
  },
  plugins: [],
}
