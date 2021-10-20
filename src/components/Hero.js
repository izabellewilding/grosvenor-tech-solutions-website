import * as React from "react";
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { ReactComponent as DownArrowGraphic } from "../assets/down-arrow-svg.svg";
import { ReactComponent as Graphic } from "../assets/construction_graphic.svg";
import { Typography } from "@mui/material";

const StyledMuiGrid = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10vw;
  overflow: hidden;

  @media ${(props) => props.theme.bp.tabletUp} {
    margin-top: 3rem !important;

    padding-bottom: 2rem;
  }
`;

const StyledMuiGridItem = styled(Grid)`
  padding: 20px;
`;

const MainGraphic = styled(Graphic)`
  width: 100%;

  @media ${(props) => props.theme.bp.tabletUp} {
    width: 176%;
  }
  height: auto;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.font.h1};
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
`;

const LearnMoreCTAWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 3rem;
`;

const LearnMoreCTA = styled.h3`
  font-size: ${(props) => props.theme.font.h3};
  color: ${(props) => props.theme.colors.white};
  margin-left: 1.5rem;
`;

const ArrowButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  height: 3rem;

  border-radius: 50%;
  border: solid 3px ${(props) => props.theme.colors.darkBlue};
  background: ${(props) => props.theme.colors.darkBlue};
  svg {
    height: 3rem;
    fill: ${(props) => props.theme.colors.white};
  }
`;

export const Hero = () => {
  return (
    <>
      <StyledMuiGrid container spacing={1}>
        <StyledMuiGridItem item xs={12} md={6}>
          <Typography variant="h2">
            Building quality, scalable software and applications
          </Typography>
          <br />
          <Grid container spacing={3}>
            <Grid item>
              <Button variant="contained">See our work</Button>
            </Grid>
            <Grid item>
              <Button variant="outlined">See our work</Button>
            </Grid>
          </Grid>
          <LearnMoreCTAWrapper>
            <ArrowButton>
              <DownArrowGraphic />
            </ArrowButton>
            <LearnMoreCTA>Learn more about what we do</LearnMoreCTA>
          </LearnMoreCTAWrapper>
        </StyledMuiGridItem>
        <StyledMuiGridItem item xs={12} md={6}>
          <MainGraphic />
        </StyledMuiGridItem>
      </StyledMuiGrid>
    </>
  );
};
