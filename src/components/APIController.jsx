import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { useResourceTypes } from "../hooks/useResourceTypes";
import { useAPI } from "../hooks/useAPI";

// A component which controls which api resources are used
const APIControllerContainer = () => {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated ? <APIController /> : null;
};
const APIController = () => {
  const resourceTypes = useResourceTypes();
  useAPI(resourceTypes.nodes);
  useAPI(resourceTypes.edges);

  return null;
};

export { APIControllerContainer as APIController };
