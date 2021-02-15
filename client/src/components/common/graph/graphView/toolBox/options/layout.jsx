import React from "react";
import { Menu, Popup, Dropdown } from "semantic-ui-react";

import { SettingsContext } from "../../../../../../contexts/graph/settings";

const layoutOptions = [
  { key: 1, text: "None", value: "None" },
  { key: 2, text: "Snap To Grid", value: "SnapToGrid" },
  { key: 3, text: "Vertical", value: "VerticalTree" },
  { key: 4, text: "Horizontal", value: "HorizontalTree" },
];

// Graph toolbox option for choosing the layout engine of the graph
const Layout = () => {
  const {
    settingsSetters: { setLayoutEngine },
  } = React.useContext(SettingsContext);

  const handleLayoutEngineChange = (event, { value }) => {
    setLayoutEngine(value);
  };
  return (
    <Popup
      trigger={
        <Menu compact icon style={{ marginLeft: "15px" }}>
          <Dropdown
            icon="grid layout"
            button
            className="icon"
            options={layoutOptions}
            onChange={handleLayoutEngineChange}
            defaultValue={"None"}
            labeled
          />
        </Menu>
      }
      content="Layout"
      position="right center"
    />
  );
};

export default Layout;
