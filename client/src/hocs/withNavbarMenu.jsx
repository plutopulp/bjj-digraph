import React from "react";
import styled, { css } from "styled-components";

import { Container, Menu } from "semantic-ui-react";

const Color = css`
  background-color: #2f303a;
`;
const NavbarMenu = styled(Menu)`
  &.ui.secondary.inverted.menu {
    ${Color}
    margin: 0;
    border-style: none;
    z-index: 10000;
  }
  &.ui.menu {
    ${Color}
    padding: 0.5em 0;
    z-index: 10000;
  }
`;

const withNavbarMenuHOC = (InnerComp) => (props) => {
  const { fixed } = props;
  return (
    <NavbarMenu
      fixed={fixed ? "top" : null}
      inverted
      pointing
      secondary
      size="large"
    >
      <Container>
        <InnerComp {...props} />
      </Container>
    </NavbarMenu>
  );
};

export default withNavbarMenuHOC;
