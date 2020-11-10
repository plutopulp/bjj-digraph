import React from "react";
import _ from "lodash";

import { GraphContext } from "../contexts/graph";
import { useAPI } from "../hooks/useAPI";
import { useDependencyTrigger } from "../hooks/useDependencyTrigger";
import { usePrevious } from "../hooks/usePrevious";
import { useResourceTypes } from "../hooks/useResourceTypes";
import { useMountedEffect } from "../hooks/useMountedEffect";
import { getMissingObject } from "../utils/arrays";

function difference(object, base) {
  function changes(object, base) {
    return _.transform(object, function (result, value, key) {
      if (!_.isEqual(value, base[key])) {
        result[key] =
          _.isObject(value) && _.isObject(base[key])
            ? changes(value, base[key])
            : value;
      }
    });
  }
  return changes(object, base);
}
// A component to control all backend rest api requests
export const APIController = () => {
  const resourceTypes = useResourceTypes();
  const { loadResource, createResource, deleteResource } = useAPI();
  const { nodes } = React.useContext(GraphContext);
  const nodeLength = usePrevious(nodes.length);
  const prevNodes = usePrevious(nodes);
  const changedNode = useDependencyTrigger(JSON.parse(JSON.stringify(nodes)));

  // A useEffect which triggers post and delete axios methods when
  // nodes array length changes
  useMountedEffect(() => {
    const canUpdate = () => Math.abs(nodes.length - prevNodes.length) === 1;
    if (canUpdate()) {
      if (nodes.length > prevNodes.length) {
        const newNode = getMissingObject(nodes, prevNodes);
        createResource(resourceTypes.nodes, newNode);
      }
      if (nodes.length < prevNodes.length) {
        const oldNode = getMissingObject(prevNodes, nodes);
        deleteResource(resourceTypes.nodes, oldNode.id);
      }
    }
  }, [nodes.length]);

  const getPrevNodeLength = () => {
    return nodeLength === undefined || nodeLength === 0
      ? nodes.length
      : nodeLength;
  };

  //React.useEffect(() => {
  //  if (nodes.length > getPrevNodeLength())
  //    createResource(resourceTypes.nodes, changedNode.dependency);
  //}, [nodes.length]);

  // React.useEffect(() => {
  //   if (nodes.length < getPrevNodeLength())
  //     //deleteResource(resourceTypes.nodes, changedNode.dependency.id);
  //     console.log(changedNode);
  // }, [nodes.length]);

  React.useEffect(() => {
    loadResource(resourceTypes.nodes);
    loadResource(resourceTypes.edges);
  }, []);

  return null;
};
