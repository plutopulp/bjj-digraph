import React from "react";
import { Popup, Button } from "semantic-ui-react";
import { HeaderWrapper } from "../styles";

const EditButtons = () => {
  return (
    <HeaderWrapper>
      <Popup
        trigger={<Button icon="edit" size="tiny" compact circular />}
        content="Edit Map"
      />
      <Popup
        trigger={<Button icon="trash" size="tiny" compact circular negative />}
        content="Delete Map"
      />
    </HeaderWrapper>
  );
};

export default EditButtons;
