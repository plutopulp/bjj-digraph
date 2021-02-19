import React from "react";

import { Modal } from "semantic-ui-react";

// A HOC which wraps an inner comp with a modal window
const withModalHOC = (InnerComp) => (props) => (
  <Modal
    open={props.open}
    closeIcon
    onClose={props.handleClose}
    size={props.size ? props.size : "small"}
  >
    <InnerComp {...props} />
  </Modal>
);

export default withModalHOC;
