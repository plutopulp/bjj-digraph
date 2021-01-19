import React from "react";
import { GraphContext } from "../../contexts/graph";
import { NodeTypesContext } from "../../contexts/nodeTypes";
import { getNodeSize } from "../../lib/utils/graph";

// A hook which returns the node and node text render functions
// embedding the approriate svg properties of the node
export const useNodeShape = () => {
  const { multiSelect, paths } = React.useContext(GraphContext);
  const { nodeTypes } = React.useContext(NodeTypesContext);

  // returns the svg width, height and x, y position offset
  // of the node
  const getNodeDimensions = (href) => {
    const { width, height } = getNodeSize(href);
    const x = -width / 2;
    const y = -height / 2;
    return { width, height, x, y };
  };

  // Returns the base (static) svg properties of a node of a given type
  const getBaseSvgProps = (nodeType) => {
    let svgProps = {
      ...nodeType.svgProps,
      ...getNodeDimensions(nodeType.shapeId),
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

  const getNodeShape = (node) => {
    const nodeType = nodeTypes[node.type];
    const baseSvgProps = getBaseSvgProps(nodeType);
    const dynamicSvgProps = getDynamicSvgProps(node);
    const svgProps = { ...baseSvgProps, ...dynamicSvgProps };

    return {
      shapeId: nodeType.shapeId,
      svgProps,
    };
  };

  return getNodeShape;
};
