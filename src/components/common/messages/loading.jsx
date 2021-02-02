import React from "react";
import { Loader, Modal } from "semantic-ui-react";

const Loading = ({ isLoading, message }) => (
  <Modal open={isLoading}>
    <Loader size="huge">{message}</Loader>
  </Modal>
);

export default Loading;
