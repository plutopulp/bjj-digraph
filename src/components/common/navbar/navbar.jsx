import React from "react";
import { v4 as uuid } from "uuid";
import { Container, Menu } from "semantic-ui-react";
import { NavbarMenu } from "./styles";

const sections = ["home", "about", "try", "contact"];

const Navbar = ({ fixed }) => (
  <NavbarMenu
    fixed={fixed ? "top" : null}
    inverted
    pointing
    secondary
    size="large"
  >
    <Container>
      {sections.map((section) => (
        <Menu.Item as="" name={section} key={uuid()} />
      ))}
    </Container>
  </NavbarMenu>
);

export default Navbar;
