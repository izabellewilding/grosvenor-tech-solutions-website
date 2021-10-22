import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { ThemeProvider } from "@emotion/react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "./theme/mui-theme";
import CssBaseline from "@mui/material/CssBaseline";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { ReactComponent as Wave } from "./assets/svg/wave.svg";
import "./App.css";
import { useSelectTheme } from "./hooks/useSelectTheme";

const BannerWave = styled(Wave)`
  position: absolute;
  opacity: 0.7;
`;

const StyledContainer = styled.div`
  padding-top: 6rem;
  padding-left: 5vw;
  padding-right: 5vw;
`;

function App() {
  const [theme, toggleTheme] = useSelectTheme();

  const isDarkTheme = theme === "dark";
  const selectedTheme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <MuiThemeProvider theme={selectedTheme}>
      <ThemeProvider theme={selectedTheme}>
        <CssBaseline />
        <app className="App">
          <Navigation onSelectTheme={toggleTheme} isDarkTheme={isDarkTheme} />
          <BannerWave />
          <StyledContainer maxWidth="xl">
            <Hero isDarkTheme={isDarkTheme} />
          </StyledContainer>
        </app>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
