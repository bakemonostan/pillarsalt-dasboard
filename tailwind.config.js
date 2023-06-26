/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mullish: ["Mullish", "sans-serif"],
      },
      backgroundImage: {
        form: "url('/images/background.svg')",
      },
      backgroundColor: {
        greenMain: "#056839",
        disabled: "#F6F7F8",
        // greenLight: "#0B6C4A",
      },
      colors: {
        greenMain: "#056839",
        grayOne: "#616161",
        grayTwo: "#959595",
        headers: "#2C3C34",
        headersTwo: "#353535",
      },
    },
  },
  plugins: [],
};
