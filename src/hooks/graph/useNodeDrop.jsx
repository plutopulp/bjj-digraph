import React from "react";
import { useDrop, useDragLayer } from "react-dnd";

import { useGraphOps } from "./useGraphOps";
import GraphTransformState from "../../lib/graph/transformState";
import { dragTypes } from "../../lib/config/types/dragTypes";
import { SettingsContext } from "../../contexts/settings";

// A hook to drop nodes from the palette to the canvas
export const useNodeDrop = (graphRef, wrapperRef) => {
  const { handleCreateNode } = useGraphOps();
  const { readOnly } = React.useContext(SettingsContext);

  // Creates a node of suitable type under the mouse cursor
  const handleDrop = () => {
    // Calculates the absolute position for dropping
    const positionConverter = new GraphTransformState(graphRef, wrapperRef);
    const dropPosition = positionConverter.clientToGraph([
      mousePosition.x,
      mousePosition.y,
    ]);
    if (dropPosition)
      handleCreateNode(dropPosition[0], dropPosition[1], itemType.subtype);
  };

  const handleCanDrop = () => {
    if (!readOnly) return true;
    // else trigger a msg to user to unlock graph
  };

  const [{ itemType }, dropRef] = useDrop({
    accept: dragTypes.NODE,
    canDrop: handleCanDrop,
    drop: handleDrop,
    collect: (monitor) => ({
      itemType: monitor.getItem(),
    }),
  });

  // Tracks the mouse position during drag
  const mousePosition = useDragLayer((monitor) => monitor.getClientOffset());

  return dropRef;
};
