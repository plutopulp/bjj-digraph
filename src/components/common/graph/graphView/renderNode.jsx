import React from "react";

const renderNode = ({ nodeTypeXlinkHref, svgProps }, ref) => {
  console.log(ref);
  return <use className="node" xlinkHref={nodeTypeXlinkHref} {...svgProps} />;
};

export default renderNode;
