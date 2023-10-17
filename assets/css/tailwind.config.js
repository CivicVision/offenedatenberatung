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
        'portal-100': '#D1EEEB',
        'portal-800': '#55c8bd',
        'portal-300': '#91d5ce',
        'metadata-100': '#FFF7D6',
        'metadata-200': '#FFEDA3',
        'metadata-400': '#f2e3a7',
        'metadata-800': '#d9be54'
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
