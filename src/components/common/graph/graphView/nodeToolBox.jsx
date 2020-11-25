import React from "react";
import { Icon, Button, Popup } from "semantic-ui-react";
import styled from "styled-components";
import { GraphContext } from "../../../../contexts/graph";
import { useGraphOps, useToggle } from "../../../../hooks";
import { bfs } from "../../../../lib/graph/algorithms/bfs";
import { dfs } from "../../../../lib/graph/algorithms/dfs";
import { shortestPathBFS } from "../../../../lib/graph/algorithms/shortestPathBFS";

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
  const { nodes, edges } = React.useContext(GraphContext);
  const [boxPosition, setBoxPosition] = React.useState([]);
  const [openEditor, toggleEditor] = useToggle(false);
  const nodeElem = document.getElementById(`node-${selected.id}`);
  const { handleDeleteNode } = useGraphOps();
  React.useEffect(() => {
    const nodePos = nodeElem.getBoundingClientRect();
    setBoxPosition([nodePos.left, nodePos.top - 60]);
  }, [selected.x, selected.y, scale, translation]);

  const handleDelete = () => handleDeleteNode(selected, selected.id);
  const handleBFS = () => bfs(nodes, edges, selected.id);
  const handleShortestPathBFS = () =>
    shortestPathBFS(
      nodes,
      edges,
      selected.id,
      "9eae6ed0-f77b-40c0-8415-4144db72118c"
    );
  const handleDFS = () => dfs(nodes, edges, selected.id);
  return (
    <Wrapper x={boxPosition[0]} y={boxPosition[1]} scale={scale}>
      <Popup
        trigger={
          <Button
            size="mini"
            onClick={toggleEditor}
            circular
            icon="edit"
            color="violet"
            inverted
          />
        }
        content="Edit Node"
      />
      <Popup
        trigger={
          <Button
            size="mini"
            onClick={handleDelete}
            circular
            icon="trash"
            color="red"
            inverted
          />
        }
        content="Delete Node"
      />
      <Popup
        trigger={
          <Button
            size="mini"
            onClick={handleBFS}
            circular
            icon="find"
            color="blue"
            inverted
          />
        }
        content="Find Node"
      />
      <Popup
        trigger={
          <Button
            size="mini"
            onClick={handleShortestPathBFS}
            circular
            icon="find"
            color="green"
            inverted
          />
        }
        content="Find Node"
      />
      <Popup
        trigger={
          <Button
            size="mini"
            onClick={handleDFS}
            circular
            icon="find"
            color="red"
            inverted
          />
        }
        content="Find Node"
      />
      <NodeEditor
        open={openEditor}
        handleClose={toggleEditor}
        node={selected}
      />
    </Wrapper>
  );
};

export default NodeToolBox;
