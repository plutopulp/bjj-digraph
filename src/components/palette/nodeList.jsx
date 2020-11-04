import React from "react";
import uuid from "react-uuid";
import { useDrag } from "react-dnd";
import styled from "styled-components";

import { nodeTypes } from "../../config/nodeTypes";
import { dragTypes } from "../../config/dragTypes";

const ListWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;
const NodeWrapper = styled.div`
  margin: 1em;
`;

export const NodeList = () => {
  return (
    <ListWrapper>
      {Object.values(nodeTypes).map((node) => (
        <NodeWrapper key={uuid()}>
          <Node node={node} />
        </NodeWrapper>
      ))}
    </ListWrapper>
  );
};

const Node = ({ node }) => {
  const [{ isDragging }, ref] = useDrag({
    item: { type: dragTypes.NODE },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  });
  return (
    <NodeWrapper ref={ref} isDragging={isDragging}>
      {" "}
      <svg width="50" height="50">
        {node.shape}
        <use xlinkHref={node.shapeId} width="50" height="50" />
      </svg>
    </NodeWrapper>
  );
};
