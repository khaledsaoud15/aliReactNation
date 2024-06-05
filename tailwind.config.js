/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navyblue: "#0042b4",
        palmgrenate: "#e82d2d",
        darkpurple: "#181b31",
        lightgrenate: "#f23c3c",
        orangeisthenewblack: "#f84419",
        softyellow: "#ffc221",
        fluo: "#2bdd5b",
        babyblue: "#5b7bfb",
      },
    },
  },
  plugins: [],
};
