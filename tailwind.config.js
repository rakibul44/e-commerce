/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";
 
export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px", // Custom breakpoint for very small devices
      },
      colors: {
        customPink: '#d8d0bc', // Example custom color
        // customGray: '#6B7280',
      },
    },
  },
  plugins: [],
});
