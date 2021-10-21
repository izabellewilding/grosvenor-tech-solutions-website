import { useState } from "react";
import styled from "@emotion/styled";
import { ThemeProvider } from "@emotion/react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "./theme/mui-theme";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { ReactComponent as Wave } from "./assets/wave.svg";
import Container from "@mui/material/Container";
import "./App.css";
import "./theme/theme";
import CssBaseline from "@mui/material/CssBaseline";

const BannerWave = styled(Wave)`
  position: absolute;
  opacity: 0.7;
`;

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <MuiThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <app className="App">
          <button
            style={{ position: "fixed", zIndex: 10 }}
            onClick={() => setIsDarkTheme(!isDarkTheme)}
          >
            toggle dark mode
          </button>
          <BannerWave />
          <Container maxWidth="xl">
            <Navigation />
            <Hero isDarkTheme={isDarkTheme} />
          </Container>
        </app>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
