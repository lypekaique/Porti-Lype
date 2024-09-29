/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        wobble: "wobble 2.5s infinite",
      },
      colors: {
        "custom-green": "#14E956",
      },
      fontFamily: {
        spacefuture: ["spacefuture,"],
      },
      boxShadow: {
        custom:
          "3px 3px 0 #1F2127, -1px -1px 0 #1F2127, 1px -1px 0 #1F2127, -1px 1px 0 #1F2127, 1px 1px 0 #1F2127",
      },
      fontSize: {
        "5.5xl": "3.5rem",
        "6.5xl": "4.2rem",
      },

      lineHeight: {
        12: "3.75rem",
      },
      letterSpacing: {
        widee: ".04em",
      },
      textShadow: {
        custom:
          "3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
        screens: {
          "inverse-xs": { max: "475px" }, // <= 475px
          "inverse-sm": { max: "640px" }, // <= 640px
          "inverse-md": { max: "768px" }, // <= 768px
          "inverse-lg": { max: "1024px" }, // <= 1024px
          "inverse-xl": { max: "1280px" },
        },
      },
      spacing: {
        "3rem": "3rem",
      },
    },
  },
  plugins: [require("tailwindcss-animated"), require("tailwindcss-textshadow")],
};
