import React from "react";

const renderNode = ({ nodeTypeXlinkHref, svgProps }) => {
  return <use className="node" xlinkHref={nodeTypeXlinkHref} {...svgProps} />;
};

export default renderNode;
