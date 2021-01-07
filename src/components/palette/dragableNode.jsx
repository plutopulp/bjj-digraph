import React from "react";
import { useDrag } from "react-dnd";
import styled from "styled-components";

import { dragTypes } from "../../lib/config/types/dragTypes";

const NodeWrapper = styled.div`
  margin: 1em;
`;

export const DragableNode = ({ nodeType }) => {
  const { svgProps } = nodeType;
  const [{ isDragging }, ref] = useDrag({
    item: {
      type: dragTypes.NODE,
      subtype: nodeType,
    },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  });
  console.log(nodeType);
  return (
    <NodeWrapper ref={ref} isDragging={isDragging}>
      {" "}
      <svg width="50" height="50">
        {nodeType.shape}
        <use
          xlinkHref={nodeType.shapeId}
          width="50"
          height="50"
          {...svgProps}
        />
      </svg>
    </NodeWrapper>
  );
};
