import React from "react";

import { Modal } from "semantic-ui-react";

const withModalHOC = (InnerComp) => (props) => (
  <Modal
    open={props.open}
    closeIcon
    onClose={props.handleClose}
    size={props.size ? props.size : "large"}
  >
    <InnerComp {...props} />
  </Modal>
);

export default withModalHOC;
