import React from "react";
import { Menu } from "semantic-ui-react";
import withModalHOC from "../../../../hocs/withModal";
import { useToggle } from "../../../../hooks";
import ContactForm from "../../../contact/form";

const ContactModal = withModalHOC(ContactForm);

const ContactItem = () => {
  const [openModal, toggleModal] = useToggle(false);
  return (
    <React.Fragment>
      <Menu.Item as="a" onClick={toggleModal}>
        Contact
      </Menu.Item>

      <ContactModal open={openModal} handleClose={toggleModal} size="small" />
    </React.Fragment>
  );
};

export default ContactItem;
