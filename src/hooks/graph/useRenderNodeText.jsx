import React from "react";
import { GraphUtils } from "react-digraph";

import { NodeTypesContext } from "../../contexts/nodeTypes";

export const useRenderNodeText = () => {
  const ref = React.useRef();
  const { nodeTypes } = React.useContext(NodeTypesContext);

  const getTypeText = (data) => {
    if (data.type && nodeTypes[data.type]) return nodeTypes[data.type].typeText;
    if (nodeTypes.emptyNode) return nodeTypes.emptyNode.typeText;
    return null;
  };

  const renderNodeText = (data, id, selected) => {
    const className = GraphUtils.classNames("node-text", { selected });
    const { title } = data;
    const maxTitleChars = 24;
    return (
      <text
        ref={ref}
        className={className}
        textAnchor="middle"
        xmlns="http://www.w3.org/2000/svg"
      >
        {title && (
          <tspan
            x={0}
            dy={4}
            fontSize="1.25em"
            xmlns="http://www.w3.org/2000/svg"
          >
            {title.length > maxTitleChars
              ? title.substr(0, maxTitleChars)
              : title}
          </tspan>
        )}
        {title && <title>{title}</title>}
      </text>
    );
  };
  return renderNodeText;
};
