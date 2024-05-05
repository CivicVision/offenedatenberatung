module.exports = {
  content: ['./hugo_stats.json'],
  safelist: [
    'bg-amber-500',
  ],
  theme: {
    extend: {
      colors: {
        civic: '#2b4c7e',
        accent: '#c7850c',
      },
      maxWidth: theme => {
        return {
          'screen-xl': theme('screens.xl'),
          'testimonial': '100px',
        }
      },
      backgroundImage: {
        'tv-screen': "url('https://res.cloudinary.com/civicvision/image/upload/v1714379689/offenedatenberatung/resources/images/Group_3.svg')",
      }
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('@tailwindcss/aspect-ratio'),
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
