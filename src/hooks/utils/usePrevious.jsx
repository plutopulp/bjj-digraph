import React from "react";

// A hook which tracks/updates the previous value of an input state
// each render
export const usePrevious = (value, initialValue) => {
  const ref = React.useRef(initialValue);
  React.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
