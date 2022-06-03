module.exports = {
  content: ['./layouts/**/*.{html,ace}', './content/*.md'],
  theme: {
    extend: {
      colors: {
        civic: '#2b4c7e',
        orange: '#c7850c',
      },
      maxWidth: theme => {
        return {
          'screen-xl': theme('screens.xl'),
          'testimonial': '100px',
        }
      },
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-heropatterns")({
      variants: [],
      patterns: ["topography", "signal"],
      colors: {
          default: "#fff",
          "blue-light": "#adc5ea",
          "blue-lighter": "#abc7f1"
        },
      opacity: {
          default: "0.4",
          "20": "0.2",
          "10": "0.1"
        }
    }),
  ],
};
