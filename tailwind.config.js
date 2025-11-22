/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}",
                "./shared/**/*.{js,jsx,ts,tsx}"
                ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0D6EFD',
          100: '#CAEAFF'
        },
        grey: {
          400: "#7D848D"
        },
        orange: {
          DEFAULT: "#FF7029"
        }
      }
    },
  },
  plugins: [],
}