import { createTheme, responsiveFontSizes } from "@mui/material";

const baseTheme = createTheme({
  breakpoints: {
    desktopUp: `only screen and (min-width: 1200px)`,
    tabletUp: `only screen and (min-width: 900px)`,
    mobileUp: `only screen and (min-width: 600px)`,
    smallMobileUp: `only screen and (min-width: 320px)`,
  },
});

const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    type: "light",
    primary: {
      main: "#6b62ff",
    },
    secondary: {
      main: "#3a3758",
    },
    light: {
      main: "#FFFFFF",
    },
    subtext: {
      main: "#807f92",
    },
    animation: {
      main: "rgb(109 102 222)",
    },
    background: { default: "" },
  },
});

const darkTheme = createTheme({
  ...baseTheme,

  palette: {
    type: "dark",
    primary: {
      main: "#6b62ff",
    },
    secondary: {
      main: "#FFFFFF",
    },
    light: {
      main: "#3a3758",
    },
    subtext: {
      main: "#ffffffc7",
    },
    animation: {
      main: "#FFFFFF",
    },
    background: { default: "#1d1c32" },
  },
});

export { darkTheme, lightTheme };
