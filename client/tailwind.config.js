/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purpleText: "#272362",
        whitecolor: "#FFFFFF",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Add Poppins as a custom font
      },
      screens: {
        xs: "300px", // Custom breakpoint for <600px screens
      },
    },
  },
  plugins: [],
};
