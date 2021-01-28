import React from "react";
import styled from "styled-components";
import { Button, Popup, Icon, Dropdown, Menu } from "semantic-ui-react";

import { SettingsContext } from "../../../../../contexts/settings";
import { GraphContext } from "../../../../../contexts/graph";
import { usePathFinder } from "../../../../../hooks";
import PathBox from "../pathBox";
const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 3em;
  width: 20em;
  z-index: 1000;
`;

const Image = styled.img`
  width: 20px;
`;

const layoutOptions = [
  { key: 1, text: "None", value: "None" },
  { key: 2, text: "Snap To Grid", value: "SnapToGrid" },
  { key: 3, text: "Vertical", value: "VerticalTree" },
  { key: 4, text: "Horizontal", value: "HorizontalTree" },
];
const ToolBoxContainer = () => {
  const {
    readOnly,
    toggleReadOnly,
    layoutEngine,
    setLayoutEngine,
  } = React.useContext(SettingsContext);
  const { multiSelect } = React.useContext(GraphContext);
  const { handleConnectingPaths } = usePathFinder();

  const canGetConnectingPaths = () => multiSelect.length === 2;

  const handleLayoutChange = (event, { value }) => {
    setLayoutEngine(value);
  };
  return (
    <Wrapper>
      <Button.Group>
        <Popup
          trigger={
            <Menu compact icon>
              <Dropdown
                icon="grid layout"
                button
                className="icon"
                options={layoutOptions}
                onChange={handleLayoutChange}
                defaultValue="None"
                labeled
              />
            </Menu>
          }
          content="Layout"
        />

        <Popup
          trigger={
            <Button icon compact onClick={toggleReadOnly}>
              <Icon name={readOnly ? "lock" : "unlock"} />
            </Button>
          }
          content={readOnly ? "Unlock" : "Lock"}
        />
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
