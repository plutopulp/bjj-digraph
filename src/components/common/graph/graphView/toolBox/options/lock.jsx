import React from "react";
import { Popup, Button, Icon } from "semantic-ui-react";
import { SettingsContext } from "../../../../../../contexts/settings";

// Graph Toolbox option for toggling read only / locked
// When locked no graph operations
const Lock = () => {
  const { readOnly, toggleReadOnly } = React.useContext(SettingsContext);
  return (
    <Popup
      trigger={
        <Button icon compact onClick={toggleReadOnly}>
          <Icon name={readOnly ? "lock" : "unlock"} />
        </Button>
      }
      content={readOnly ? "Unlock" : "Lock"}
    />
  );
};

export default Lock;
