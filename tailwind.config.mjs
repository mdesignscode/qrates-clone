/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        dark: "#000",
        light: "#fff",
        primary: "#fff804",
        accent: "#e280ff",
        secondary: "#81836c",
      }
    },
  },
  plugins: [],
}

export default config
