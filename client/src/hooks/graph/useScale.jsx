import React from "react";

// A hook to track the current graph scale due to zooming
export const useScale = (graphRef) => {
  const [scale, setScale] = React.useState(null);

  const getScale = () => {
    let transform = graphRef.current.view.getAttribute("transform");
    transform = transform.split(" ");
    const parenRegExp = /\(([^)]+)\)/g;
    return Number(parenRegExp.exec(transform[1])[1]);
  };

  React.useEffect(() => {
    let observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes") {
          setScale(getScale());
        }
      });
    });
    observer.observe(graphRef.current.view, {
      attributes: true,
      attributeFilter: ["transform"],
    });
    return () => observer.disconnect();
  });
  return scale;
};
