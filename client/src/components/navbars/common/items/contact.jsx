import React from "react";
import { Menu } from "semantic-ui-react";
import { useToggle } from "../../../../hooks";
import Contact from "../../../contact/contact";

const ContactItem = () => {
  const [openModal, toggleModal] = useToggle(false);
  return (
    <React.Fragment>
      <Menu.Item as="a" onClick={toggleModal}>
        Contact
      </Menu.Item>

      <Contact open={openModal} handleClose={toggleModal} size="small" />
    </React.Fragment>
  );
};

export default ContactItem;
