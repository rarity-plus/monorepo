/** @type {import("tailwindcss/tailwind-config").TailwindConfig} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sourceCodePro: ["Source Code Pro", "monospace"],
      },
    },
  },
  plugins: [],
};
