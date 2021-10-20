import * as React from "react";
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { ReactComponent as DownArrowGraphic } from "../assets/down-arrow-svg.svg";
import { ReactComponent as Graphic } from "../assets/construction_graphic_code.svg";
import { Typography } from "@mui/material";

const StyledMuiGrid = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 5vw;
  padding-right: 5vw;
  padding-top: 3rem;

  @media ${(props) => props.theme.bp.desktopUp} {
    padding-top: 1.5rem;
  }
`;

const StyledMuiGridItem = styled(Grid)`
  padding: 20px;
`;

const MainGraphicWrapper = styled(StyledMuiGridItem)`
  z-index: 5;
`;

const MainGraphic = styled(Graphic)`
  width: 100%;
  z-index: 3;
  height: auto;

  @media ${(props) => props.theme.bp.tabletUp} {
    width: 155%;
  }
`;

const Title = styled(Typography)`
  font-weight: bold;
  color: ${(props) => props.theme.colors.darkBlueGrey};
  mix-blend-mode: color-burn;
`;

const LearnMoreCTAWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 3rem;
  cursor: pointer;
`;

const LearnMoreCTA = styled(Typography)`
  margin-left: 1.5rem;
`;

const ButtonsContainer = styled(Grid)`
  margin-top: 1rem;
`;

const RoundedButton = styled(Button)`
  border-radius: 50px;
  padding: 15px 27px;
`;

const ArrowButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.25rem;
  width: 2.25rem;

  border-radius: 50%;
  border: solid 3px ${(props) => props.theme.colors.darkBlueGrey};
  background: ${(props) => props.theme.colors.darkBlueGrey};
  svg {
    height: 2.25;
    fill: ${(props) => props.theme.colors.white};
  }
`;

export const Hero = () => {
  return (
    <>
      <StyledMuiGrid container spacing={1}>
        <StyledMuiGridItem item xs={12} md={6}>
          <Title variant="h1">Quality software and applications</Title>
          <ButtonsContainer container spacing={3}>
            <Grid item>
              <RoundedButton variant="contained">See our work</RoundedButton>
            </Grid>
            <Grid item>
              <RoundedButton variant="outlined">Get in touch</RoundedButton>
            </Grid>
          </ButtonsContainer>
          <LearnMoreCTAWrapper>
            <ArrowButton>
              <DownArrowGraphic />
            </ArrowButton>
            <LearnMoreCTA variant="body1">
              Learn more about what we do
            </LearnMoreCTA>
          </LearnMoreCTAWrapper>
        </StyledMuiGridItem>
        <MainGraphicWrapper item xs={12} md={6}>
          <MainGraphic />
        </MainGraphicWrapper>
      </StyledMuiGrid>
    </>
  );
};
