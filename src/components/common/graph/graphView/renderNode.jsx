import React from "react";

const renderNode = (data, nodeShape) => {
  console.log(nodeShape);
  const { nodeType, size, shapeProps } = nodeShape;

  return (
    <use
      className="node"
      height={size.height}
      width={size.width}
      x={-size.width / 2}
      y={-size.height / 2}
      xlinkHref={nodeType.xlinkHref}
      fill={nodeType.name.fill}
      {...shapeProps}
    />
  );
};

export default renderNode;
