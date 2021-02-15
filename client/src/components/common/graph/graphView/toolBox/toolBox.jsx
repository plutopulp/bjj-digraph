import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Button } from "semantic-ui-react";

import Layout from "./options/layout";
import Lock from "./options/lock";
import PathFinder from "./options/pathFinder";
import CenterNode from "./options/centerNode";
import Zoom from "./options/zoom";
import HelpMenu from "./options/help/help";
const Wrapper = styled.div`
  position: absolute;
  left: 0px;
  top: 0;
  z-index: 1000;
`;

const ToolBoxContainer = ({ show }) => {
  return (
    show && (
      <Wrapper>
        <Button.Group size="medium">
          <HelpMenu />
          <Lock />
          <Layout />
          <PathFinder />
        </Button.Group>
      </Wrapper>
    )
  );
};

ToolBoxContainer.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default ToolBoxContainer;
