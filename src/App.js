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
import CssBaseline from "@mui/material/CssBaseline";

const BannerWave = styled(Wave)`
  position: absolute;
  opacity: 0.7;
`;

const StyledContainer = styled.div`
  padding-top: 6rem;
`;

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  //emotion theme provider gets passed one of the MuiThemes for use in styled-components
  const theme = isDarkTheme ? darkTheme : lightTheme;
  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  return (
    <MuiThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <app className="App">
          {/* <button
            style={{ position: "fixed", zIndex: 10 }}
            onClick={() => toggleTheme}
          >
            toggle dark mode
          </button> */}
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
