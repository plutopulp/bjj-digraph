import React from "react";
import _ from "lodash";

import { usePrevious } from "../hooks/usePrevious";
import { useMountedEffect } from "../hooks/useMountedEffect";
import { getMissingObject } from "../lib/utils/arrays";
import { APIManager } from "../lib/managers/api";

// A hook which triggers all the api requests for an input resource type
export const useAPI = (resourceType) => {
  const state = resourceType.state; // The react state of the resource
  const prevState = usePrevious(state);

  const API = new APIManager(resourceType);

  // Reads all resources into state on mount
  React.useEffect(() => {
    API.read();
  }, []);

  // Triggers post and delete axios methods when
  // state array length changes
  useMountedEffect(() => {
    const canUpdate = () => Math.abs(state.length - prevState.length) === 1;
    if (canUpdate()) {
      if (state.length > prevState.length) {
        const newItem = getMissingObject(state, prevState);
        API.create(newItem);
      }
      if (state.length < prevState.length) {
        const oldItem = getMissingObject(prevState, state);
        API.delete(oldItem);
      }
    }
  }, [state.length]);

  // Triggers patch axios method when a item in state array updates
  useMountedEffect(() => {
    const canUpdate = () => state.length - prevState.length === 0;
    if (canUpdate()) {
      const updatedState = _.difference(state, prevState);
      updatedState.forEach((item) => API.update(item));
    }
  }, [JSON.stringify(state)]);
};
