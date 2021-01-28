import React from "react";
import styled from "styled-components";

import { GraphContext } from "../../contexts/graph";
import { NodeTypesContext } from "../../contexts/nodeTypes";

import { nodesInclude } from "../../lib/utils/graph";

const NodeContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.25em;
  font-weight: 650;
  padding: 1em;
  color: ${({ selected }) => (selected ? "white" : "#222")};
`;

export const useRenderNodeText = () => {
  const { nodeTypes } = React.useContext(NodeTypesContext);
  const { selectedNodes } = React.useContext(GraphContext);

  const getTypeText = (data) => {
    if (data.type && nodeTypes[data.type]) return nodeTypes[data.type].typeText;
    if (nodeTypes.emptyNode) return nodeTypes.emptyNode.typeText;
    return null;
  };

  const renderNodeText = (node, id, selected) => {
    const nodeType = nodeTypes[node.type] || nodeTypes["score-position-user"];
    let isSelected = selected;
    if (nodesInclude(id, Array.from(selectedNodes))) isSelected = true;
    const { width, height } = nodeType.shape.props;
    return (
      <foreignObject
        x={-width / 2}
        y={-height / 2}
        width={width}
        height={height}
      >
        <NodeContentWrapper selected={isSelected}>
          <span>{node.title} </span>
        </NodeContentWrapper>
      </foreignObject>
    );
  };
  return renderNodeText;
};
