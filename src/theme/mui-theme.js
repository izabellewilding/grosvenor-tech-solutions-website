import { createTheme, responsiveFontSizes } from "@mui/material";
import { theme as baseTheme } from "./theme";

const theme = createTheme({
  palette: {
    primary: {
      main: baseTheme.colors.purple,
    },
  },
});

export const muiTheme = responsiveFontSizes(theme);
