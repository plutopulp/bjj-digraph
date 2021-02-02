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
    padding: 0.5em 0;
  }
`;

export const SidebarMenu = styled(Menu)`
  &.ui.menu {
    ${Color}
  }
`;

export const NavFlexWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
`;
