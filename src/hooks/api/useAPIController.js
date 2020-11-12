import React from "react";
import _ from "lodash";
import { useAuth0 } from "@auth0/auth0-react";

import { usePrevious } from "../utils/usePrevious";
import { useMountedEffect } from "../effects/useMountedEffect";
import { getMissingObject } from "../../lib/utils/arrays";
import { APIRequestHandler } from "../../lib/api/requestHandler";

// An api control hook which determines when the request methods
// for an input resource type are triggered
export const useAPIController = (resourceType) => {
  // The react state of the resource
  const state = resourceType.state;

  const { getAccessTokenSilently } = useAuth0();

  // The previous react state. We use this to evaluate
  // whether an api call should take place.
  const prevState = usePrevious(state);

  // CRUD method provider for the resource
  const [API, setAPI] = React.useState(null);

  const token = React.useRef(null);

  // On mount, load the access token and set the API handler
  React.useEffect(() => {
    async function initializeController() {
      try {
        // get access token
        token.current = await getAccessTokenSilently();
        // instantiate an API handler, will trigger re-render
        setAPI(() => ({
          handle: new APIRequestHandler(resourceType, token.current),
        }));
      } catch (error) {
        console.log(error);
      }
    }
    initializeController();
  }, []);

  // After re-render triggered by setAPI, call API handlers
  // only on update, where API is non-null

  // Reads all resources into state on mount
  useMountedEffect(() => {
    API.handle.read();
  }, [API]);

  const canUpdate = () => Math.abs(state.length - prevState.length) === 1;

  // Triggers post method when state array length increases
  useMountedEffect(() => {
    if (canUpdate()) {
      if (state.length > prevState.length) {
        const newItem = getMissingObject(state, prevState);
        API.handle.create(newItem);
      }
    }
  }, [state.length]);

  // Triggers delete method when state array length decreases
  useMountedEffect(() => {
    if (canUpdate()) {
      if (state.length < prevState.length) {
        const oldItem = getMissingObject(prevState, state);
        API.handle.delete(oldItem);
      }
    }
  }, [state.length]);

  // Triggers patch method when one or more items in state array updates
  useMountedEffect(() => {
    const canUpdate = () => state.length - prevState.length === 0;
    if (canUpdate()) {
      const updatedState = _.difference(state, prevState);
      updatedState.forEach((item) => API.handle.update(item));
    }
  }, [JSON.stringify(state)]);
};
