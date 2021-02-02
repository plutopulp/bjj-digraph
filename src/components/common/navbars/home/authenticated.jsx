import React from "react";

import { Container } from "semantic-ui-react";

import { HomeItemsWrapper, NavbarMenu } from "../styles";
import HomeItems from "../items/home";
import LogoutItem from "../items/logout";
import AppItem from "../items/appLink";

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
        <HomeItemsWrapper>
          <HomeItems />
          <AppItem />
        </HomeItemsWrapper>
        <LogoutItem />
      </Container>
    </NavbarMenu>
  );
};

export default AuthNavbar;
