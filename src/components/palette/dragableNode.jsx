import React from "react";
import { useDrag } from "react-dnd";
import styled from "styled-components";

import { dragTypes } from "../../lib/config/types/dragTypes";

const NodeWrapper = styled.div`
  margin: 1em;
`;

export const DragableNode = ({ node }) => {
  const [{ isDragging }, ref] = useDrag({
    item: {
      type: dragTypes.NODE,
      subtype: node,
    },
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
