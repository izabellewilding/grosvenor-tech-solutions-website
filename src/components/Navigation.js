import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100vw;
  padding: 2.5rem 5vw 0 5vw;
`;

const Logo = styled.div`
  width: 150px;
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
  color: ${(props) => props.theme.colors.darkBlue};
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
      <div>logo</div>
      <NavList>
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
    </Wrapper>
  );
};
