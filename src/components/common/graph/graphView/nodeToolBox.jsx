import React from "react";
import { Icon, Button, Popup } from "semantic-ui-react";
import styled from "styled-components";
import { useGraphOps, useToggle } from "../../../../hooks";

import GraphTransformState from "../../../../lib/graph/transformState";
import NodeEditor from "./nodeEditor";

const Wrapper = styled.div`
  position: absolute;
  width: ${({ scale }) => 10 * (0.5 + 1.2 * scale)}em;
  height: ${({ scale }) => 3 * (0.5 + 1.2 * scale)}em;
  background: #fff;
  border-radius: 5px;
  border: solid 1px #777;
  top: calc(${({ y }) => y}px);
  left: ${({ x }) => x}px;
`;
// Appears as a toolbox above the selected node
const NodeToolBox = ({
  selected,
  graphRef,
  wrapperRef,
  scale,
  translation,
}) => {
  const [boxPosition, setBoxPosition] = React.useState([]);
  const [openEditor, toggleEditor] = useToggle(false);
  const transformManager = new GraphTransformState(graphRef, wrapperRef);
  const nodeElem = document.getElementById(`node-${selected.id}`);
  const { handleDeleteNode } = useGraphOps();
  React.useEffect(() => {
    const nodePos = nodeElem.getBoundingClientRect();
    setBoxPosition([nodePos.left, nodePos.top - 60]);
  }, [selected.x, selected.y, scale, translation]);

  const handleDelete = () => handleDeleteNode(selected, selected.id);
  return (
    <Wrapper x={boxPosition[0]} y={boxPosition[1]} scale={scale}>
      <Button size="mini" onClick={toggleEditor}>
        <Popup trigger={<Icon name="edit" />} content="Edit Node" />
      </Button>
      <Button size="mini" onClick={handleDelete}>
        <Popup trigger={<Icon name="delete" />} content="Delete Node" />
      </Button>
      <NodeEditor
        open={openEditor}
        handleClose={toggleEditor}
        node={selected}
      />
    </Wrapper>
  );
};

export default NodeToolBox;
