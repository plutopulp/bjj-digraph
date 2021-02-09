import React from "react";
import _ from "lodash";

import { usePrevious } from "../utils/usePrevious";
import { useMountedEffect } from "../effects/useMountedEffect";
import { getMissingObject } from "../../lib/utils/arrays";
import { useAPI } from "./useAPI";

// An api control hook which determines when the request methods
// for an input resource type are triggered
export const useAPIController = (state, setState, endpoints, disabled) => {
  // The request methods are provided by the useAPI hook, which
  // in turn hooks into the useAuth hook
  const { token, read, create, update, destroy } = useAPI();

  // When resource initially loaded into state
  // Must be true to make further API requests
  const [loaded, setLoaded] = React.useState(false);

  // The previous react state. We use this to evaluate
  // whether an api call should take place.
  const prevState = usePrevious(state);

  // Partial conditions for create, update and delete
  const hasGrown = () => state.length - prevState.length > 0;
  const hasShrunk = () => state.length - prevState.length < 0;
  const hasSameLength = () => state.length - prevState.length === 0;

  // Common conditions for create, update and delete
  const canCUD = () => loaded && !disabled;

  // Putting these conditions together
  const canCreate = () => canCUD() && hasGrown();
  const canDelete = () => canCUD() && hasShrunk();
  const canUpdate = () => canCUD() && hasSameLength();

  // Reads all resources into state on mount
  React.useEffect(() => {
    if (token) read(endpoints.list, setState, setLoaded);
  }, [token]);

  // Triggers post method on update when state array length increases
  useMountedEffect(() => {
    if (!canCreate()) return;
    const newItems = _.difference(state, prevState);
    newItems.forEach((item) => create(endpoints.list, item));
  }, [state.length]);

  // Triggers delete method on update when state array length decreases
  useMountedEffect(() => {
    if (!canDelete()) return;
    const oldItems = _.difference(prevState, state);
    oldItems.forEach((item) => destroy(endpoints.detail(item.id), item));
  }, [state.length]);

  // Triggers patch method on update when one or more items in state array updates
  useMountedEffect(() => {
    if (!canUpdate()) return;
    const updatedState = _.difference(state, prevState);
    updatedState.forEach((item) => update(endpoints.detail(item.id), item));
  }, [JSON.stringify(state)]);
};
