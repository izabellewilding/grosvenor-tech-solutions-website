import React from "react";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100vw;
  padding: 2.5rem 1.5rem;
`;

const Logo = styled(Typography)`
  color: #d5d4ff;
  font-weight: bold;
  color: ${(props) => props.theme.colors.white};
  z-index: 1;
`;

const NavList = styled.ul`
  display: flex;
`;

const NavItem = styled.li`
  margin: 8px 24px;
  padding-bottom: 8px;
  cursor: pointer;
  position: relative;
  border-radius: 20px solid red;
  color: ${(props) => props.theme.colors.white};
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  &:hover {
    color: ${(props) => props.theme.colors.purple};
    a:after {
      width: 100%;
      left: 0;
    }
  }

  a:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 30%;
    position: absolute;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
`;

export const Navigation = () => {
  return (
    <Wrapper>
      <Logo variant="body2">Grosvenor Technical Solutions.</Logo>
      {/* <NavList>
        <NavItem>
          <a>About</a>
        </NavItem>
        <NavItem>
          <a>Gallery</a>
        </NavItem>
        <NavItem>
          <a>Contact</a>
        </NavItem>
      </NavList>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton> */}
    </Wrapper>
  );
};
