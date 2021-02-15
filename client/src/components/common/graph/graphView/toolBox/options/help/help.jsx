import React from "react";
import { Popup, Button, Icon } from "semantic-ui-react";
import { useToggle } from "../../../../../../../hooks";
import Menu from "./menu";

// Graph Toolbox option for showing help menu
const HelpMenu = () => {
  const [helpMenu, toggleHelpMenu] = useToggle(false);
  return (
    <React.Fragment>
      <Popup
        trigger={
          <Button icon compact onClick={toggleHelpMenu}>
            <Icon name="question " />
          </Button>
        }
        content="Help Menu"
        position="bottom left"
      />
      <Menu open={helpMenu} handleClose={toggleHelpMenu} />
    </React.Fragment>
  );
};

export default HelpMenu;
