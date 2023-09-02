/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px"
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-roboto-mono)"],
      },
      colors: {
        bodyColor: "#0A192F",
        bodyLight: "#112240",
        textGreen: "#64FFDA",
        textLight: "#CCD6F6",
        textDark: "#8892B0",
        hoverColor: "rgba(100, 255, 218, 0.1)"
      }
    },
  },
  plugins: [],
};
