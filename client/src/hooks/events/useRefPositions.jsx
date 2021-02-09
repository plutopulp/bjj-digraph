import React from "react";
import { useScrollPosition } from "./useScrollPosition";

// A hook which tracks the positions of an array of refs (DOM elements)
// relative to the current scroll position
export const useRefPositions = (refs) => {
  const scrollPosition = useScrollPosition();
  const [positions, setPositions] = React.useState(
    refs.map((_) => {
      return { top: 0, bottom: 0 };
    })
  );

  React.useLayoutEffect(() => {
    const topPosition = (element) => element.getBoundingClientRect().top;
    const bottomPosition = (element) => element.getBoundingClientRect().bottom;

    const getPosition = (ref) => {
      return {
        top: topPosition(ref.current),
        bottom: bottomPosition(ref.current),
      };
    };

    const updatePositions = () => {
      // Updates the position of each ref relative to the scroll position
      const newPositions = refs.map((ref) => {
        return getPosition(ref);
      });
      setPositions(newPositions);
    };
    if (refs.length) updatePositions();
  }, [refs.length, scrollPosition]);

  return positions;
};
