import React from "react";
import styled from "styled-components";

import { Container } from "semantic-ui-react";

import { NavFlexWrap, NavbarMenu } from "../styles";
import HomeItems from "../items/home";
import AppItem from "../items/appLink";
import UserDropdown from "../items/userDropdown";

const NavWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const AuthNavbar = ({ fixed }) => {
  return (
    <NavbarMenu
      fixed={fixed ? "top" : null}
      inverted
      pointing
      secondary
      size="large"
    >
      <Container>
        <NavWrapper>
          <NavFlexWrap>
            <HomeItems />
            <AppItem />
          </NavFlexWrap>
          <UserDropdown />
        </NavWrapper>
      </Container>
    </NavbarMenu>
  );
};

export default AuthNavbar;
