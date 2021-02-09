import React from "react";
import { useRefPositions } from "./useRefPositions";

// A hook which tracks which ref (DOM element) in an array of refs is active
// The active ref is the one AFTER the ref whose bottom position has moved
// beyond (above) the top of the screen
// Refs "should" be passed to the hook in descending positional order

export const useActiveRef = (refs, params) => {
  let offset = 0;
  if (params) offset = params.offset;
  const positions = useRefPositions(refs);
  // Index of the active ref in refs
  const [activeRefIndex, setActiveRefIndex] = React.useState(0);

  // Update active section when section positions change
  // Want it to be instant
  React.useLayoutEffect(() => {
    const updateActiveRef = () => {
      const newActiveRefIndex = positions.findIndex(
        (position) => position.bottom >= (offset ? offset : 0)
      );
      setActiveRefIndex(newActiveRefIndex);
    };
    updateActiveRef();
  }, [JSON.stringify(positions)]);

  return activeRefIndex;
};
