import React from "react";
import { Node } from "react-digraph";
import { GraphContext } from "../../contexts/graph";
import {
  nodeTypes,
  opponentShapeProps,
  userShapeProps,
} from "../../lib/config/types/nodeTypes";
import { getNodeSize } from "../../lib/utils/graph";

// A hook which returns a function giving the svg properties of a node

export const useNodeShape = () => {
  const { multiselect } = React.useContext(GraphContext);

  const getShapeProps = (nodeType) => {
    const subtype = nodeType.subtype;
    switch (subtype) {
      case "user":
        return userShapeProps;
      case "opponent":
        return opponentShapeProps;
      default:
        throw new Error(`Node subtype ${subtype} not recognized.`);
    }
  };

  const getNodeShape = (node) => {
    const nodeType = nodeTypes[node.type];
    const nodeTypeXlinkHref = Node.getNodeTypeXlinkHref(node, nodeTypes) || "";
    const { width, height } = getNodeSize(nodeTypeXlinkHref);
    const shapeProps = getShapeProps(nodeType);

    return {
      nodeType: { name: nodeType, xlinkHref: nodeTypeXlinkHref },
      size: { width, height },
      shapeProps,
    };
  };

  return getNodeShape;
};
