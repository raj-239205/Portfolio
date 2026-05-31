/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#081224",
          secondary: "#17253d",
          card: "#1b2a42",
        },
        accent: {
          gold: "#f7c948",
          blue: "#3b82f6",
        },
        text: {
          primary: "#ffffff",
          secondary: "#b8c1d1",
        },
      },
      fontFamily: {
        headings: ["var(--font-orbitron)", "Orbitron", "sans-serif"],
        body: ["var(--font-poppins)", "Poppins", "sans-serif"],
      },
      boxShadow: {
        premium: "0 4px 24px rgba(0, 0, 0, 0.25)",
        premiumHover: "0 12px 40px rgba(247, 201, 72, 0.08), 0 4px 24px rgba(0, 0, 0, 0.35)",
        premiumBlueHover: "0 12px 40px rgba(59, 130, 246, 0.08), 0 4px 24px rgba(0, 0, 0, 0.35)",
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        blink: "blink 0.8s infinite",
        bounceSlow: "bounce 2s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
