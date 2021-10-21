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
    type: "white",
    primary: {
      main: "#6b62ff",
    },
    dark: {
      main: "#353354",
    },
    light: {
      main: "#FFFFFF",
    },
  },
});

const darkTheme = createTheme({
  ...baseTheme,

  palette: {
    type: "dark",
    primary: {
      main: "#6b62ff",
    },
    dark: {
      main: "#FFFFFF",
    },
    light: {
      main: "#353354",
    },
  },
});

export { darkTheme, lightTheme };

// export const muiTheme = responsiveFontSizes(theme);
