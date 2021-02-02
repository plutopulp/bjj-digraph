import React from "react";

import { Container } from "semantic-ui-react";

import { NavbarMenu } from "./styles";
import HomeItems from "./items/home";
import LogoutItem from "./items/logout";

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
        <HomeItems />
        <LogoutItem />
      </Container>
    </NavbarMenu>
  );
};

export default AuthNavbar;
