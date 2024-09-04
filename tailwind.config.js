/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "10px 10px 40px 10px rgba(0, 0, 0, 0.5)",
        "2xl": "5.67px 5.67px 3.78px 0px #00000066",
        "4xl": "0px 4px 4px 0px #00000054",
        "3xli": ["0px 4px 10px 2px #ffffff40 inset","0px 4px 16px 0px rgba(0, 0, 0, 0.8)"],
        "2ab": "0px 5px 10px 5px #00000050",
        "1a": "-5px -3px 30px -10px #96BEE7",
        "1b": "4px 5px 30px 5px #101213",
        "5xl": ["4px 5px 30px 5px #101213", "-5px -3px 30px -10px #96BEE7"]
      },
      dropShadow: {
        "3xl": ["4px 5px 30px 5px #101213", "-5px -3px 30px -10px #96BEE7"],
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(to bottom,rgba(55, 62, 68, 1),rgba(25, 27, 31, 1))",
      },
    },
  },
  plugins: [],
};
