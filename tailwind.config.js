module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fill: (theme) => ({ red: theme("colors.red.primary") }),
    colors: {
      white: "#ffffff",
      blue: { medium: "#005c98" },
      black: { light: "#005c98", faded: "#00000059" },
      grey: { base: "#616161", background: "#fafafa", primary: "#dbdbdb" },
      red: { primary: "#ed4956" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

// TODO: add to tailwind config
// bg-blue-medium
// text-red-primary
// text-blue-medium
// text-gray-base
// border-grey-primary
