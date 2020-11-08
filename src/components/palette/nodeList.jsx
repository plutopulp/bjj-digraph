import React from "react";
import uuid from "react-uuid";
import styled from "styled-components";

import { nodeTypes } from "../../config/nodeTypes";
import { DragableNode } from "./dragableNode";

const ListWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;

export const NodeList = () => {
  return (
    <ListWrapper>
      {Object.values(nodeTypes).map((node) => (
        <DragableNode key={uuid()} node={node} />
      ))}
    </ListWrapper>
  );
};
