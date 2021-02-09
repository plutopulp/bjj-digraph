import React from "react";
import { Popup, Button, Icon } from "semantic-ui-react";
import { SettingsContext } from "../../../../../../contexts/graph/settings";

// Graph Toolbox option for centering node on mouse cursor
// when node is moving
const CenterNode = () => {
  const { settings } = React.useContext(SettingsContext);
  const { centerNodeOnMove, toggleCenterNodeOnMove } = settings;
  return (
    <Popup
      trigger={
        <Button icon compact onClick={toggleCenterNodeOnMove}>
          <Icon name={centerNodeOnMove ? "dot circle outline" : "unlock"} />
        </Button>
      }
      content={
        centerNodeOnMove ? "Disable Node Centering" : "Enable Node Centering"
      }
    />
  );
};

export default CenterNode;
