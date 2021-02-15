import React from "react";
import { useDrag } from "react-dnd";
import { Image } from "semantic-ui-react";
import styled from "styled-components";

import { dragTypes } from "../../../../lib/config/types/dragTypes";
import { toTitle } from "../../../../lib/utils/strings";

const SVGWithShadow = styled.div`
  -webkit-filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.3));
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.3));
`;
const NodeTypeWrapper = styled.div`
  padding: 1em;
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

  // Extracts the title from the node type
  const getNodeTitle = () => toTitle(nodeType.name.split("-")[1]);
  return (
    <NodeTypeWrapper>
      <SVGWithShadow ref={ref} isDragging={isDragging}>
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
      </SVGWithShadow>
      <Title>{getNodeTitle()}</Title>
    </NodeTypeWrapper>
  );
};

export default NodeTypeContainer;
