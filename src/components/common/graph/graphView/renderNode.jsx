import React from "react";
import { Node, GraphUtils } from "react-digraph";

import { graphConfig } from "../../../../lib/config/graph/graphConfig";
import { getNodeSize } from "../../../../lib/utils/graph";

const { nodeTypes, nodeSubtypes } = graphConfig;

const renderNode = (ref, data, id, selected, hovered) => {
  const nodeShapeContainerClassName = GraphUtils.classNames("shape");
  const nodeClassName = GraphUtils.classNames("node", { selected, hovered });
  const nodeSubtypeClassName = GraphUtils.classNames("subtype-shape", {
    selected,
  });
  const nodeSubtypeXlinkHref = Node.getNodeSubtypeXlinkHref(data, nodeSubtypes);
  const nodeTypeXlinkHref = Node.getNodeTypeXlinkHref(data, nodeTypes) || "";

  const { width, height } = getNodeSize(nodeTypeXlinkHref);

  const nodeType = nodeTypes[data.type];
  console.log(nodeType);

  return (
    <g>
      {!!data.subtype && (
        <use
          className={nodeSubtypeClassName}
          x={-width / 2}
          y={-height / 2}
          width={width}
          height={height}
          xlinkHref={nodeSubtypeXlinkHref}
        />
      )}
      <use
        className={nodeClassName}
        height={height}
        width={width}
        x={-width / 2}
        y={-height / 2}
        xlinkHref={nodeTypeXlinkHref}
        fill={nodeType.fill}
      />
    </g>
  );
};
const renderNode2 = () => {
  return (
    <svg viewBox="0 0 20 20">
      <foreignObject x="-12" y="0" width="20" height="20">
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "yellow",
          }}
        />
      </foreignObject>
    </svg>
  );
};

export default renderNode;
export { renderNode2 };
