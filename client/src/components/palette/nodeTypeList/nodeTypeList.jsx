import React from "react";
import uuid from "react-uuid";
import styled from "styled-components";
import { NodeTypesContext } from "../../../contexts/nodeTypes";

import NodeType from "./nodeType/nodeType";

const ListWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  margin: 0.75em;
  padding: 0.75em;
`;

const Title = styled.div`
  font-size: 1.5em;
  font-weight: 700;
  margin: 0.75em;
`;

// A list of dragable svg nodes in the palette
const NodeTypeList = ({ title, type, subtype }) => {
  const { nodeTypes } = React.useContext(NodeTypesContext);

  const filteredNodeTypes = () => {
    return Object.values(nodeTypes).filter(
      (nodeType) =>
        nodeType.name.includes(type) && nodeType.name.includes(subtype)
    );
  };
  const sortByTitle = (types) =>
    types.sort((a, b) => a.name.length - b.name.length);

  return (
    <SectionWrapper>
      <Title>{title}</Title>
      <ListWrapper>
        {sortByTitle(filteredNodeTypes()).map((nodeType) => (
          <NodeType key={uuid()} nodeType={nodeType} />
        ))}
      </ListWrapper>
    </SectionWrapper>
  );
};

export default NodeTypeList;
