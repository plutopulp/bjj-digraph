import React from "react";
import styled from "styled-components";
import { Popup, Button, Icon } from "semantic-ui-react";
import { SettingsContext } from "../../../../../../contexts/graph/settings";

// Graph Toolbox option for toggling read only / locked
// When locked no graph operations
const Lock = () => {
  const {
    settings: { readOnly },
    settingsSetters: { toggleReadOnly },
  } = React.useContext(SettingsContext);
  return (
    <Popup
      trigger={
        <Button icon compact onClick={toggleReadOnly}>
          <Icon name={readOnly ? "lock" : "unlock"} />
        </Button>
      }
      position="bottom center"
      content={readOnly ? "Unlock" : "Lock"}
    />
  );
};

export default Lock;
