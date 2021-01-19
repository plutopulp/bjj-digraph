import React from "react";

const renderNode = ({ shapeId, svgProps }) => {
  return <use className="node" href={shapeId} {...svgProps} />;
};

export default renderNode;
