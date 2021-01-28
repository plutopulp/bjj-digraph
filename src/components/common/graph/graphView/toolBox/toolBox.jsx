import React from "react";
import styled from "styled-components";
import { Button, Popup, Icon } from "semantic-ui-react";

import Layout from "./options/layout";
import Lock from "./options/lock";
import PathFinder from "./options/pathFinder";
const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 3em;
  width: 20em;
  z-index: 1000;
`;

const ToolBoxContainer = () => {
  return (
    <Wrapper>
      <Button.Group>
        <Layout />
        <Lock />
        <PathFinder />
      </Button.Group>
    </Wrapper>
  );
};

export default ToolBoxContainer;
