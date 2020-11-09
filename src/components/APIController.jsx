import React from "react";
import { GraphContext } from "../contexts/graph";

import { useAPI } from "../hooks/useAPI";
import { useDependencyTrigger } from "../hooks/useDependencyTrigger";
import { useResourceTypes } from "../hooks/useResourceTypes";

// A component to control all backend rest api requests
export const APIController = () => {
  const resourceTypes = useResourceTypes();
  const { loadResource } = useAPI();
  const { nodes } = React.useContext(GraphContext);

  const updatedNode = useDependencyTrigger(JSON.parse(JSON.stringify(nodes)));

  React.useEffect(() => console.log(updatedNode), [
    JSON.parse(JSON.stringify(nodes)),
  ]);

  React.useEffect(() => {
    loadResource(resourceTypes.nodes);
    loadResource(resourceTypes.edges);
  }, []);

  return null;
};
