module.exports = {
  theme: {
    extend: {
      keyframes: {
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "bounce-slow": "bounceSlow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
