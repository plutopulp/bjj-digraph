import React from "react";

export const useHovered = (initialState) => {
  const [hovered, setHovered] = React.useState(initialState);
  const elementRef = React.useRef(null);

  const handleMouseOver = () => setHovered(true);
  const handleMouseOut = () => setHovered(false);

  React.useEffect(() => {
    const node = elementRef.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);

      return () => {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, []);
  return [hovered, elementRef];
};
