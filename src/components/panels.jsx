import React from "react";
import { Modal } from "semantic-ui-react";

import { useKeyPressed } from "../hooks/useKeyPressed";
import { useToggle } from "../hooks/useToggle";
import { NodeEditor } from "./nodeEditor";

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

export const NodePanel = ({ node }) => (
  <Panel>
    <NodeEditor node={node} />
  </Panel>
);

export const EdgePanel = ({ edge }) => <Panel>{edge.source}</Panel>;
