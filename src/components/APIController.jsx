import React from "react";
import _ from "lodash";

import { GraphContext } from "../contexts/graph";
import { usePrevious } from "../hooks/usePrevious";
import { useResourceTypes } from "../hooks/useResourceTypes";
import { useMountedEffect } from "../hooks/useMountedEffect";
import { getMissingObject } from "../lib/utils/arrays";
import { APIManager } from "../lib/managers/api";

// A component to control all backend rest api requests
export const APIController = () => {
  const resourceTypes = useResourceTypes();
  const { nodes } = React.useContext(GraphContext);
  const prevNodes = usePrevious(nodes);

  const nodesAPI = new APIManager(resourceTypes.nodes);

  // Reads all resources into state on mount
  React.useEffect(() => {
    nodesAPI.read();
  }, []);

  // Triggers post and delete axios methods when
  // nodes array length changes
  useMountedEffect(() => {
    const canUpdate = () => Math.abs(nodes.length - prevNodes.length) === 1;
    if (canUpdate()) {
      if (nodes.length > prevNodes.length) {
        const newNode = getMissingObject(nodes, prevNodes);
        nodesAPI.create(newNode);
      }
      if (nodes.length < prevNodes.length) {
        const oldNode = getMissingObject(prevNodes, nodes);
        nodesAPI.delete(oldNode);
      }
    }
  }, [nodes.length]);

  // Triggers patch axios method when a node updates
  useMountedEffect(() => {
    const canUpdate = () => nodes.length - prevNodes.length === 0;
    if (canUpdate()) {
      const updatedNodes = _.difference(nodes, prevNodes);
      updatedNodes.forEach((node) => nodesAPI.update(node));
    }
  }, [JSON.stringify(nodes)]);

  return null;
};
