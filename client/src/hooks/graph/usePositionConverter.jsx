import { useScale } from "./useScale";
import { useTranslation } from "./useTranslation";

// A hook for converting client to graph coordinates
export const usePositionConverter = (graphRef, wrapperRef) => {
  const scale = useScale(graphRef);
  const translation = useTranslation(graphRef);

  // Gets the position of the graph within the viewport
  const getGraphPosition = () => {
    if (!wrapperRef.current) return null;
    const boundingRect = wrapperRef.current.getBoundingClientRect();
    const graphPosition = [boundingRect.left, boundingRect.top];
    return graphPosition;
  };

  const clientToGraph = (position) => {
    const graphPosition = getGraphPosition();
    if (!scale || !translation || !graphPosition) return null;
    return position.map(
      (coord, i) => (coord - graphPosition[i] - translation[i]) / scale
    );
  };
  const graphToClient = (position) => {
    const graphPosition = getGraphPosition();
    return position.map(
      (coord, i) => scale * coord + graphPosition[i] + translation[i]
    );
  };
  return { clientToGraph, graphToClient };
};
