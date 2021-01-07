import React from "react";
import uuid from "react-uuid";
import styled from "styled-components";
import { NodeTypesContext } from "../../contexts/nodeTypes";

import { DragableNode } from "./dragableNode";

const ListWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;

export const NodeList = () => {
  const { nodeTypes } = React.useContext(NodeTypesContext);
  return (
    <ListWrapper>
      {Object.values(nodeTypes).map((nodeType) => (
        <DragableNode key={uuid()} nodeType={nodeType} />
      ))}
    </ListWrapper>
  );
};
