import React from "react";

// A hook for tracking the inner window size
export const useWindowSize = () => {
  const getWindowSize = () => {
    return { width: window.innerWidth, height: window.innerHeight };
  };

  const [windowSize, setWindowSize] = React.useState(getWindowSize());

  React.useEffect(() => {
    const changeWindowSize = () => setWindowSize(getWindowSize());
    window.addEventListener("resize", changeWindowSize);
    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, []);

  return windowSize;
};
