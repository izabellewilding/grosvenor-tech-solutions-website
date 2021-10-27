import styled from "@emotion/styled";
import { ThemeProvider } from "@emotion/react";
import {
  ThemeProvider as MuiThemeProvider,
  responsiveFontSizes,
} from "@mui/material";
import { darkTheme, lightTheme } from "./theme/mui-theme";
import CssBaseline from "@mui/material/CssBaseline";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { ReactComponent as Wave } from "./assets/svg/wave.svg";
import "./App.css";
import { useSelectTheme } from "./hooks/useSelectTheme";
import { BinaryMatrixAnimation } from "./components/BinaryMartixAnimation";

const BannerWave = styled(Wave)`
  position: absolute;
  /* opacity: 0.9; */
`;

const StyledContainer = styled.div`
  padding-top: 10vh;
  padding-left: 5vw;
  padding-right: 5vw;

  max-width: 1890px;
  margin: auto;
`;

function App() {
  const [theme, toggleTheme] = useSelectTheme();

  const isDarkTheme = theme === "dark";
  const selectedTheme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <MuiThemeProvider theme={responsiveFontSizes(selectedTheme)}>
      <ThemeProvider theme={responsiveFontSizes(selectedTheme)}>
        <CssBaseline />
        <app className="App">
          <Navigation onSelectTheme={toggleTheme} isDarkTheme={isDarkTheme} />
          <BannerWave />
          {/* <BinaryMatrixAnimation isDarkTheme={isDarkTheme} /> */}
          <StyledContainer maxWidth="xl">
            <Hero isDarkTheme={isDarkTheme} />
          </StyledContainer>
        </app>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
