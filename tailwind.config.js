// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        // mono: ["ui-monospace", "SFMono-Regular"]
        nuno: ["Nunito", "sans-serif"]
      },
      colors: {
        teal: {
          DEFAULT: "#6DE0CA"
        },
        darkTeal: {
          DEFAULT: "#33445B"
        },
        lightTeal: {
          DEFAULT: "#4C5D72"
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
