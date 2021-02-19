import React from "react";
import { Icon, Menu } from "semantic-ui-react";
import { useToggle } from "../../../../hooks";
import NewGraph from "../../app/newGraph";

const NewMapItem = () => {
  const [openModal, toggleModal] = useToggle(false);
  return (
    <React.Fragment>
      <Menu.Item as="a" onClick={toggleModal}>
        <Icon name="plus" /> Map
      </Menu.Item>

      <NewGraph open={openModal} handleClose={toggleModal} size="small" />
    </React.Fragment>
  );
};

export default NewMapItem;
