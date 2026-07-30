/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,jsx}", "./src/components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#070707",
        panel: "#10100f",
        paper: "#f4f0e8",
        gold: "#c99a42",
        "gold-soft": "#ead7ad",
        steel: "#91938f",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 80px rgba(201, 154, 66, 0.12)",
      },
    },
  },
  plugins: [],
};
