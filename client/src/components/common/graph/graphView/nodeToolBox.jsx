import React from "react";
import { Icon, Button, Popup } from "semantic-ui-react";
import styled from "styled-components";
import { GraphContext } from "../../../../contexts/graph/graph";
import {
  useGraphOps,
  useMountedEffect,
  useScale,
  useToggle,
  useTranslation,
} from "../../../../hooks";
import { usePositionConverter } from "../../../../hooks/graph/usePositionConverter";
import { bfs } from "../../../../lib/graph/algorithms/bfs";
import { getConnectingPaths } from "../../../../lib/graph/algorithms/getConnectingPaths";
import { shortestPathBFS } from "../../../../lib/graph/algorithms/shortestPathBFS";

import NodeEditor from "./nodeEditor";

const Wrapper = styled.div`
  position: absolute;
  width: ${({ boxRect }) => boxRect.width}px;
  height: ${({ boxRect }) => boxRect.height}px;
  background: #fff;
  border-radius: 5px;
  border: solid 1px #777;
  top: ${({ boxRect }) => boxRect.y}px;
  left: ${({ boxRect }) => boxRect.x}px;
  z-index: 1;
`;
const Rect = styled.div`
  position: absolute;
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
  width: 50px;
  height: 50px;
  border: solid 1px #777;
`;

// Appears as a toolbox above the selected node
const NodeToolBox = ({ selected, graphRef, wrapperRef }) => {
  const { nodes, edges } = React.useContext(GraphContext);
  const scale = useScale(graphRef);
  const translation = useTranslation(graphRef);
  const [boxBoundingRect, setBoxBoundingRect] = React.useState({});
  const [openEditor, toggleEditor] = useToggle(false);
  const nodeElem = document.getElementById(`node-${selected.id}`);
  const { handleDeleteNode } = useGraphOps();
  useMountedEffect(() => {
    const nodePos = nodeElem.getBoundingClientRect();
    const graphPos = wrapperRef.current.getBoundingClientRect();
    setBoxBoundingRect({
      x: nodePos.x - graphPos.x,
      y: nodePos.y - graphPos.y,
      width: nodePos.width * 1.1,
      height: nodePos.height * 1.1,
    });
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
  const handleConnectingPaths = () =>
    getConnectingPaths(
      nodes,
      edges,
      selected.id,
      "a6bbdbd5-c2d3-4558-82d5-72cf5b90944d"
    );
  return (
    <React.Fragment>
      <Wrapper boxRect={boxBoundingRect} scale={scale}>
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
              onClick={handleConnectingPaths}
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
    </React.Fragment>
  );
};

export default NodeToolBox;
