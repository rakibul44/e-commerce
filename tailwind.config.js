/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'midnight': '#101111',
      'midmorning': '#212F3C',
      // Add default violet and gray colors here
      violet: {
        500: '#6B4E91', // Define violet[500] color
      },
      gray: {
        500: '#6B7280', // Define gray[500] color
      },
    },
    extend: {
      screens: {
        xs: "480px", // Custom breakpoint for very small devices
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
});
