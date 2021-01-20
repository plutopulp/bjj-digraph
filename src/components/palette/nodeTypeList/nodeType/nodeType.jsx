import React from "react";
import { useDrag } from "react-dnd";
import styled from "styled-components";

import { dragTypes } from "../../../../lib/config/types/dragTypes";
import { toTitle } from "../../../../lib/utils/strings";

const Wrapper = styled.div`
  margin: 1em 2em 1em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const Title = styled.div`
  font-weight: 550;
  font-size: 0.8em;
`;

// A dragable svg node of a given nodeType which
// can be dropped onto the graph
const NodeTypeContainer = ({ nodeType }) => {
  const { svgProps } = nodeType;
  const [{ isDragging }, ref] = useDrag({
    item: {
      type: dragTypes.NODE,
      subtype: nodeType,
    },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  });
  console.log(nodeType);

  // Extracts the title from the node type
  const getNodeTitle = () => toTitle(nodeType.name.split("-")[1]);
  return (
    <Wrapper ref={ref} isDragging={isDragging}>
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
      <Title>{getNodeTitle()}</Title>
    </Wrapper>
  );
};

export default NodeTypeContainer;
