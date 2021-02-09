import React from "react";
import { Modal } from "semantic-ui-react";

import { useKeyPressed, useToggle } from "../hooks/index";

const Panel = ({ children }) => {
  const altKey = useKeyPressed("Alt");
  const [open, toggleOpen] = useToggle(false);
  React.useEffect(() => {
    if (altKey && !open) toggleOpen();
  });
  return (
    <Modal open={open} closeIcon onClose={toggleOpen}>
      {children}
    </Modal>
  );
};

export const NodePanel = ({ node }) => <Panel></Panel>;

export const EdgePanel = ({ edge }) => <Panel>{edge.source}</Panel>;
