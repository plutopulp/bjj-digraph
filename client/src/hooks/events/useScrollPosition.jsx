import React from "react";

// Tracks the current window mouse scroll position
export const useScrollPosition = () => {
  const [position, setPosition] = React.useState(
    window.scrollY + window.innerHeight
  );

  const onScroll = () => setPosition(window.scrollY + window.innerHeight);
  React.useLayoutEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return position;
};
