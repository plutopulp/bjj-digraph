import React from "react";

// Hook for keeping track of whether a key is pressed

export const useKeyPressed = (targetKey) => {
  const [pressed, setPressed] = React.useState(false);

  React.useEffect(() => {
    const handleKeyDown = ({ key }) => {
      if (key === targetKey) setPressed(true);
    };

    const handleKeyUp = ({ key }) => {
      if (key === targetKey) setPressed(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [targetKey]);
  return pressed;
};
