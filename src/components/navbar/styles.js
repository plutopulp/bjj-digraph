import styled, { css } from "styled-components";
import { Menu, Message } from "semantic-ui-react";

const Color = css`
  background-color: #2f303a;
`;

export const StyledMenu = styled(Menu)`
  &.ui.secondary.inverted.menu {
    ${Color}
    margin: 0;
    border-style: none;
  }
  &.ui.menu {
    ${Color}
  }
`;

export const StyledMessage = styled(Message)`
  &.message {
    margin: 0;
  }
`;
