import React from "react";
import { Modal, Button, Message, Icon, Transition } from "semantic-ui-react";
import { useAuth, useToggle } from "../../../hooks";

const ModalMessage = ({ open, handleClose }) => {
  const { loginWithRedirect } = useAuth();
  return (
    <Transition visible={open} animation="scale" duration={500}>
      <Modal open={open} onClose={handleClose} size="small" closeIcon>
        <Modal.Header>
          Data will <em>not</em> be saved!
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            You are currently not logged in, so your map will not be saved! If
            you refresh the page your map will be lost.
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={loginWithRedirect} primary>
            <Icon name="sign in" />
            Sign Up For Free
          </Button>

          <Button onClick={handleClose}>Got it!</Button>
        </Modal.Actions>
      </Modal>
    </Transition>
  );
};

export default ModalMessage;
