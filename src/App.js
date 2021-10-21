import { useState } from "react";
import styled from "@emotion/styled";
import { ThemeProvider } from "@emotion/react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "./theme/mui-theme";
import { theme } from "./theme/theme";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { ReactComponent as Wave } from "./assets/wave.svg";
import Container from "@mui/material/Container";
import "./App.css";
import "./theme/theme";

const BannerWave = styled(Wave)`
  position: absolute;
  opacity: 0.7;
`;

function App() {
  const [dark, setDark] = useState(false);
  const theme = dark ? darkTheme : lightTheme;

  return (
    <MuiThemeProvider theme={dark ? darkTheme : lightTheme}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <button onClick={() => setDark(!dark)}>toggle dark mode</button>
          <BannerWave />
          <Container maxWidth="xl">
            <Navigation />
            <Hero />
          </Container>
        </div>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
