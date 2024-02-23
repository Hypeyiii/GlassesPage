/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',  
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "background-shine": "background-shine 2s linear infinite",
      },
      keyframes: {
        "background-shine": {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
    },
    animation: {
      "border-width": "border-width 3s infinite alternate",
    },
    keyframes: {
      "border-width": {
        from: {
          width: "10px",
          opacity: "0",
        },
        to: {
          width: "100px",
          opacity: "1",
        },
      },
    },
  },
  plugins: [],
};
