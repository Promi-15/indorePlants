/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        slate: {
          500: "#6B7280", // you can adjust the slate shade here
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
