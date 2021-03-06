import * as React from "react";
import styled from "@emotion/styled";
import BaseGrid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { ReactComponent as DownArrowGraphic } from "../assets/svg/down-arrow-svg.svg";
import { ReactComponent as Graphic } from "../assets/svg/construction_graphic.svg";
import { Typography } from "@mui/material";

const Grid = styled(BaseGrid)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;

  @media ${(props) => props.theme.breakpoints.desktopUp} {
    padding-top: 1.5rem;
  }
`;

const StyledGridItem = styled(BaseGrid)`
  padding: 20px;
`;

const MainGraphicWrapper = styled(StyledGridItem)`
  z-index: 5;
`;

const MainGraphic = styled(Graphic)`
  width: 100%;
  z-index: 3;
  height: auto;

  @media ${(props) => props.theme.breakpoints.tabletUp} {
    width: 1000px;
  }
`;

const Title = styled(Typography)`
  font-weight: bold;
  color: ${(props) => props.theme.palette.primary.dark};
  margin-bottom: 1.25rem;
  @supports not (-webkit-touch-callout: none) {
    mix-blend-mode: ${(props) =>
      props.theme.palette.type === "dark" ? "difference" : "color-burn"};
  }

  @media ${(props) => props.theme.breakpoints.tabletUp} {
    font-size: 5rem !important;
  }
`;

const Subtitle = styled(Typography)`
  font-size: 20px;
  color: ${(props) => props.theme.palette.neutral.main};
`;

const LearnMoreCTAWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 3rem;
  cursor: pointer;
`;

const LearnMore = styled(Typography)`
  margin-left: 1.5rem;
  color: ${(props) => props.theme.palette.primary.dark};
`;

const ButtonsContainer = styled(BaseGrid)`
  margin-top: 1rem;
`;

const RoundedButton = styled(Button)`
  border-radius: 50px;
  padding: 15px 27px;
  text-decoration: none;
`;

const ArrowButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.25rem;
  width: 2.25rem;

  border-radius: 50%;
  border: solid 3px ${(props) => props.theme.palette.primary.dark};
  background: ${(props) => props.theme.palette.primary.dark};

  svg {
    height: 2.25;
    fill: ${(props) => props.theme.palette.primary.light};
  }
`;

export const Hero = () => {
  return (
    <>
      <Grid container spacing={1}>
        <StyledGridItem item xs={12} md={6}>
          <Title variant="h1">Quality software and applications</Title>
          <Subtitle variant="subtitle1">
            Bespoke mobile and web apps developed by experienced engineers
          </Subtitle>
          <ButtonsContainer container spacing={3}>
            <Grid item>
              <RoundedButton
                as="a"
                href="mailto:ziagrosvenor17@gmail.com"
                aria-label="See our work"
                variant="contained"
                mail
              >
                Get in touch
              </RoundedButton>
            </Grid>
            {/* <Grid item>
              <RoundedButton
                aria-label="Get in touch"
                variant="outlined"
              ></RoundedButton>
            </Grid> */}
          </ButtonsContainer>
          {/* <LearnMoreCTAWrapper>
            <ArrowButton>
              <DownArrowGraphic />
            </ArrowButton>
            <LearnMore variant="body1">Learn more about what we do</LearnMore>
          </LearnMoreCTAWrapper> */}
        </StyledGridItem>
        <MainGraphicWrapper item xs={12} md={6}>
          <MainGraphic />
        </MainGraphicWrapper>
      </Grid>
    </>
  );
};
