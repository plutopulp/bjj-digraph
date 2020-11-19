import React from "react";

// A hook to track the current graph translation due to panning
export const useTranslation = (graphRef) => {
  const [translation, setTranslation] = React.useState([]);

  const getTranslation = () => {
    let transform = graphRef.current.view.getAttribute("transform");
    transform = transform.split(" ");
    const parenRegExp = /\(([^)]+)\)/g;
    let trans = parenRegExp.exec(transform[0]);
    trans = trans[1].split(",");
    return [Number(trans[0]), Number(trans[1])];
  };

  React.useEffect(() => {
    let observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes") {
          setTranslation(getTranslation());
        }
      });
    });
    observer.observe(graphRef.current.view, {
      attributes: true,
      attributeFilter: ["transform"],
    });
    return () => observer.disconnect();
  });
  return translation;
};
