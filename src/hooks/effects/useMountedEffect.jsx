import React from "react";

// A useEffect wrapper hook which fires only when component has mounted
export const useMountedEffect = (effectHook, dependencies = []) => {
  const hasMounted = React.useRef(false);

  React.useEffect(() => {
    if (hasMounted.current) effectHook();
    else hasMounted.current = true;
  }, dependencies);
};
