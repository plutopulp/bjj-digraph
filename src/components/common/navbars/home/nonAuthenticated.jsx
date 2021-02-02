import React from "react";

import { Container } from "semantic-ui-react";

import { NavbarMenu } from "../styles";
import HomeItems from "../items/home";
import LoginItem from "../items/login";
import { NavFlexWrap } from "../styles";

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
        <NavFlexWrap>
          <HomeItems />
        </NavFlexWrap>
        <LoginItem />
      </Container>
    </NavbarMenu>
  );
};

export default NonAuthNavbar;
