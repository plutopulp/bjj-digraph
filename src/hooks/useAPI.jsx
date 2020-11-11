import React from "react";
import _ from "lodash";
import { useAuth0 } from "@auth0/auth0-react";

import { usePrevious } from "../hooks/usePrevious";
import { useMountedEffect } from "../hooks/useMountedEffect";
import { getMissingObject } from "../lib/utils/arrays";
import { APIManager } from "../lib/managers/api";

// A hook which triggers all the api requests for an input resource type
export const useAPI = (resourceType) => {
  // The react state of the resource
  const state = resourceType.state;
  const { getAccessTokenSilently } = useAuth0();

  // The previous react state. We use this to evaluate
  // whether an api call should take place.
  const prevState = usePrevious(state);

  // CRUD method provider for the resource
  const API = new APIManager(resourceType);

  // Reads all resources into state on mount
  React.useEffect(() => {
    (async () => {
      try {
        const token = await getAccessTokenSilently({});
        API.read(token);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [getAccessTokenSilently]);

  const canUpdate = () => Math.abs(state.length - prevState.length) === 1;

  // Triggers post method when state array increases
  useMountedEffect(() => {
    if (canUpdate()) {
      if (state.length > prevState.length) {
        const newItem = getMissingObject(state, prevState);
        (async () => {
          try {
            const token = await getAccessTokenSilently({});
            API.create(newItem, token);
          } catch (e) {
            console.error(e);
          }
        })();
      }
    }
  }, [state.length, getAccessTokenSilently]);

  // Triggers delete method when state array decreases
  useMountedEffect(() => {
    if (canUpdate()) {
      if (state.length < prevState.length) {
        const oldItem = getMissingObject(prevState, state);
        (async () => {
          try {
            const token = await getAccessTokenSilently({});
            API.delete(oldItem, token);
          } catch (e) {
            console.error(e);
          }
        })();
      }
    }
  }, [state.length, getAccessTokenSilently]);

  // Triggers patch axios method when one or
  // more items in state array updates
  useMountedEffect(() => {
    const canUpdate = () => state.length - prevState.length === 0;
    if (canUpdate()) {
      (async () => {
        try {
          const token = await getAccessTokenSilently({});
          const updatedState = _.difference(state, prevState);
          updatedState.forEach((item) => API.update(item, token));
        } catch (e) {
          console.error(e);
        }
      })();
    }
  }, [JSON.stringify(state), getAccessTokenSilently]);
};
