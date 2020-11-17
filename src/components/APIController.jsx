import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { useResourceTypes, useAPIController } from "../hooks/index";

// A component which controls which api resources are used
const APIControllerContainer = () => {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated ? <APIController /> : null;
};
const APIController = () => {
  const resourceTypes = useResourceTypes();
  useAPIController(resourceTypes.graphs);

  return null;
};

export { APIControllerContainer as APIController };
