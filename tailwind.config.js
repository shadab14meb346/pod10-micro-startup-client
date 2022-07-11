module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bagoss: ["BAGOSS", "sans-serif"],
        teodor: ["Teodor"],
        ibmflexmono: ["IBM Plex Mono", "sans-serif"],
      },
      height: {
        lg: "300px",
        "lg-1": "400px",
        "lg-2": "500px",
        "lg-3": "600px",
        "lg-4": "650px",
        "lg-5": "700px",
        "11/12": "92%",
        "1/12": "8%",
      },
    },
  },
  variants: {
    extend: {
      // ...
      display: ["hover", "focus", "group-hover"],
    },
  },
  plugins: [
    // ...
    require("@tailwindcss/forms"),
  ],
};
