import "./App.css";
import "./theme/theme";
import { ThemeProvider } from "@emotion/react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { muiTheme } from "./theme/mui-theme";
import { theme } from "./theme/theme";
import { Navigation } from "./components/Navigation";
import styled from "@emotion/styled";
import { Hero } from "./components/Hero";

function App() {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Navigation />
          <Hero />
        </div>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
