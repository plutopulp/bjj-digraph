import React from "react";
import _ from "lodash";

import { usePrevious } from "../utils/usePrevious";
import { useMountedEffect } from "../effects/useMountedEffect";
import { getMissingObject } from "../../lib/utils/arrays";
import { useAPI } from "./useAPI";

// An api control hook which determines when the request methods
// for an input resource type are triggered
export const useAPIController = (state, setState, endpoints) => {
  const { token, read, create, update, destroy } = useAPI();

  // The previous react state. We use this to evaluate
  // whether an api call should take place.
  const prevState = usePrevious(state);

  // Reads all resources into state on mount
  React.useEffect(() => {
    read(endpoints.list, setState);
  }, [token]);

  const canUpdate = () => Math.abs(state.length - prevState.length) === 1;

  // Triggers post method on update when state array length increases
  useMountedEffect(() => {
    if (!canUpdate()) return;
    if (state.length > prevState.length) {
      const newItem = getMissingObject(state, prevState);
      create(endpoints.list, newItem);
    }
  }, [state.length]);

  // Triggers delete method on update when state array length decreases
  useMountedEffect(() => {
    if (!canUpdate()) return;
    if (state.length < prevState.length) {
      const oldItem = getMissingObject(prevState, state);
      destroy(endpoints.detail(oldItem.id), oldItem);
    }
  }, [state.length]);

  // Triggers patch method on update when one or more items in state array updates
  useMountedEffect(() => {
    const canUpdate = () => state.length - prevState.length === 0;
    if (!canUpdate()) return;
    const updatedState = _.difference(state, prevState);
    updatedState.forEach((item) => update(endpoints.detail(item.id), item));
  }, [JSON.stringify(state)]);
};
