import React from "react";
import { Popup, Button, Icon, Menu, Dropdown } from "semantic-ui-react";
import { Slider } from "react-semantic-ui-range";
import { SettingsContext } from "../../../../../../contexts/graph/settings";

// Graph Toolbox option for toggling read only / locked
// When locked no graph operations
const Zoom = () => {
  const {
    settings: { minZoom, maxZoom },
    settingsSetters: { setMinZoom, setMaxZoom },
  } = React.useContext(SettingsContext);
  const minZoomSettings = {
    min: 0,
    max: 1,
    step: 0.1,
    onChange: (value) => {
      setMinZoom(value);
    },
  };
  const maxZoomSettings = {
    min: 0,
    max: 2,
    step: 0.1,
    onChange: (value) => {
      setMaxZoom(value);
    },
  };
  return (
    <Dropdown icon="zoom" className="icon" button>
      <Dropdown.Menu>
        <Dropdown.Item text="Min Zoom">
          <Slider
            value={minZoom}
            color="red"
            settings={minZoomSettings}
            style={{ height: "40px", width: "100px" }}
          />
          <Dropdown.Item>
            <Slider
              value={maxZoom}
              color="blue"
              settings={maxZoomSettings}
              style={{ height: "40px", width: "100px" }}
            />
          </Dropdown.Item>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Zoom;
