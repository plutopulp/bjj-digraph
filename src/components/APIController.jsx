import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { useResourceTypes, useAPIController } from "../hooks/index";
import { routes } from "../lib/config/routes/routes";

// A component which controls which api resources are used
const APIControllerContainer = () => {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated ? <APIController /> : null;
};
const APIController = () => {
  const resourceTypes = useResourceTypes();
  useAPIController(
    resourceTypes.graphs.state,
    resourceTypes.graphs.setState,
    routes.api.graphs
  );

  return null;
};

export { APIControllerContainer as APIController };
