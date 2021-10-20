import { createTheme } from "@mui/material";
import { theme } from "./theme";

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: theme.colors.purple,
    },
  },
});
