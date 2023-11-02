

// tailwind.config.js
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
];
export const theme = {
  "purple": {
    extend: "white", // <- inherit default values from dark theme
    colors: {
      background: "#0D001A",
      foreground: "#fff",
      primary: {
        50: "#3B096C",
        100: "#520F83",
        200: "#7318A2",
        300: "#9823C2",
        400: "#c031e2",
        500: "#DD62ED",
        600: "#F182F6",
        700: "#FCADF9",
        800: "#FDD5F9",
        900: "#FEECFE",
        DEFAULT: "#DD62ED",
        foreground: "#ffffff",
      },
      focus: "#F182F6",
    },
    layout: {
        disabledOpacity: "0.3", // opacity-[0.3]
        radius: {
          small: "2px", // rounded-small
          medium: "4px", // rounded-medium
          large: "6px", // rounded-large
        },
        borderWidth: {
          small: "1px", // border-small
          medium: "1px", // border-medium
          large: "2px", // border-large
        

      },
    },
  },
};
export const darkMode = "class";
export const plugins = [nextui()];

