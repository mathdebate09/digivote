import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/index.html"],
  theme: {
    extend: {
      fontFamily: {
        // Extending the default font family with custom fonts
        body: ["Libre Franklin", ...defaultTheme.fontFamily.sans],
        logo: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Adding custom colors to the existing color palette
        black: {
          soft: "#333333",
          softer: "#404040",
        },
        pastel: {
          pink: '#FFD1DC',
          blue: '#AEC6CF',
          brown: '#d4a373',
          mint: '#98FF98',
          purple: '#CBAACB',
          orange: '#FFB347'
        }
      },
    },
  },
  plugins: [],
};
