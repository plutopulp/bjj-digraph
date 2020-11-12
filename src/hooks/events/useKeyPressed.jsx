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

// Hook for keeping track of an array of pressed keys

export const useKeysPressed = (targetKeys) => {
  const [pressed, setPressed] = React.useState(targetKeys.map((key) => false));
  React.useEffect(() => {
    const handleKeyDown = ({ key }) => {
      const keyIndex = targetKeys.findIndex((item) => item === key);
      if (keyIndex !== -1)
        setPressed([
          ...pressed.slice(0, keyIndex),
          true,
          ...pressed.slice(keyIndex + 1),
        ]);
    };

    const handleKeyUp = ({ key }) => {
      const keyIndex = targetKeys.findIndex((item) => item === key);
      if (keyIndex !== -1)
        setPressed([
          ...pressed.slice(0, keyIndex),
          false,
          ...pressed.slice(keyIndex + 1),
        ]);
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  });
  return pressed;
};
