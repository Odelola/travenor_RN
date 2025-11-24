/** @type {import('tailwindcss').Config} */

 const appPalette = {
        primary: {
          DEFAULT: '#0D6EFD',
          100: '#CAEAFF'
        },
        dark: {
          DEFAULT: '#1B1E28',
        },
        grey: {
          300: "#F7F7F9",
          400: "#7D848D"
        },
        orange: {
          DEFAULT: "#FF7029"
        },
        white: "#FFFFFF"
}

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}",
                "./shared/**/*.{js,jsx,ts,tsx}"
                ],
  theme: {
    extend: {
      colors: {
        ...appPalette
      }
    },
  },
  plugins: [],
}

module.exports.appPalette = appPalette;