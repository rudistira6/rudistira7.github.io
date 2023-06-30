/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html","form.html"],
  theme: {
    container: {
      center: true,
      padding: "20px",
    },
    extend: {
      fontFamily: {
        poppins: "poppins",
        roboto: "Roboto",
      },
      animation: {
        wiggle: "wiggle 6s ease-in-out infinite",
        carlos: "carlos ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
