import React from "react";

import { useResourceTypes } from "../hooks/useResourceTypes";
import { useAPI } from "../hooks/useAPI";

// A component to control all backend rest api requests
export const APIController = () => {
  const resourceTypes = useResourceTypes();
  useAPI(resourceTypes.nodes);
  useAPI(resourceTypes.edges);

  return null;
};
