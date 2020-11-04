import React from "react";
import uuid from "react-uuid";
import { nodeTypes } from "../../config/nodeTypes";
import styled from "styled-components";

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
          <svg width="50" height="50">
            {node.shape}
            <use xlinkHref={node.shapeId} width="50" height="50" />
          </svg>
        </NodeWrapper>
      ))}
    </ListWrapper>
  );
};
