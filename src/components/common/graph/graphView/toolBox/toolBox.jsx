import React from "react";
import styled from "styled-components";
import { Button, Popup, Icon, Dropdown, Menu } from "semantic-ui-react";

import { SettingsContext } from "../../../../../contexts/settings";
import { GraphContext } from "../../../../../contexts/graph";
import { usePathFinder } from "../../../../../hooks";
import PathBox from "../pathBox";
import Layout from "./options/layout";
const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 3em;
  width: 20em;
  z-index: 1000;
`;

const ToolBoxContainer = () => {
  const { multiSelect } = React.useContext(GraphContext);
  const { handleConnectingPaths } = usePathFinder();

  const canGetConnectingPaths = () => multiSelect.length === 2;

  return (
    <Wrapper>
      <Button.Group>
        <Layout />

        <Popup
          trigger={
            <Button
              icon
              compact
              onClick={handleConnectingPaths}
              disabled={!canGetConnectingPaths()}
            >
              <Icon name="code branch" />
            </Button>
          }
          content="See all connecting paths"
        />
      </Button.Group>
      <PathBox />
    </Wrapper>
  );
};

export default ToolBoxContainer;
