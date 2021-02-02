import React from "react";

import { Container } from "semantic-ui-react";

import { NavbarMenu } from "./styles";
import HomeItems from "./items/home";
import LoginItem from "./items/login";

const NonAuthNavbar = ({ fixed }) => {
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
        <LoginItem />
      </Container>
    </NavbarMenu>
  );
};

export default NonAuthNavbar;
