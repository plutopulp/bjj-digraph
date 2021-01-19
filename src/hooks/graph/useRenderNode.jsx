import React from "react";
import { GraphContext } from "../../contexts/graph";
import { NodeTypesContext } from "../../contexts/nodeTypes";

// A hook which returns a render node method for react digraphs.
// The svg properties of the node are embedded in the svg symbol
// returned by the render method
export const useRenderNode = () => {
  const { multiSelect, paths } = React.useContext(GraphContext);
  const { nodeTypes } = React.useContext(NodeTypesContext);

  // Get the svg width, height and x, y position offset
  // of a nodeType
  const getNodeDimensions = (nodeType) => {
    const { width, height } = nodeType.shape.props;
    const x = -width / 2;
    const y = -height / 2;
    return { width, height, x, y };
  };

  // Returns the base (static) svg properties of a node of a given type
  const getBaseSvgProps = (nodeType) => {
    let svgProps = {
      ...nodeType.svgProps,
      ...getNodeDimensions(nodeType),
    };
    return svgProps;
  };

  // Returns the dynamic svg properties of a node due to user interaction
  const getDynamicSvgProps = (node) => {
    if (multiSelect.find((selectedNode) => selectedNode.id === node.id)) {
      return { stroke: "blue" };
    }
    const pathNodes = [];
    paths.forEach((path) => {
      path.forEach((node) => pathNodes.push(node));
    });

    if (pathNodes.find((pathNode) => pathNode.id === node.id)) {
      return { strokeWidth: "20" };
    }
  };

  // Returns the complete svg properties of a node
  const getSVGProps = (node) => {
    const nodeType = nodeTypes[node.type];
    const baseSvgProps = getBaseSvgProps(nodeType);
    const dynamicSvgProps = getDynamicSvgProps(node);
    const svgProps = { ...baseSvgProps, ...dynamicSvgProps };
    return svgProps;
  };

  // Render method providing suitable svg symbol for input node
  const renderNode = (ref, node, id, selected, hovered) => {
    const nodeType = nodeTypes[node.type];
    const svgProps = getSVGProps(node);
    return <use className="node" href={nodeType.shapeId} {...svgProps} />;
  };

  return renderNode;
};
