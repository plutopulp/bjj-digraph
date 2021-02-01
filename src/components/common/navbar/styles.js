import styled, { css } from "styled-components";
import { Menu } from "semantic-ui-react";

const Color = css`
  background-color: #2f303a;
`;
export const NavbarMenu = styled(Menu)`
  &.ui.secondary.inverted.menu {
    ${Color}
    margin: 0;
    border-style: none;
  }
  &.ui.menu {
    ${Color}
  }
`;

export const SidebarMenu = styled(Menu)`
  &.ui.menu {
    ${Color}
  }
`;
