import React from "react";

import { Container } from "semantic-ui-react";

import { NavbarMenu } from "./styles";
import HomeItems from "./nonAuthenticated/homeItems";
import LoginItem from "./nonAuthenticated/loginItem";

const Navbar = ({ fixed }) => {
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

export default Navbar;
