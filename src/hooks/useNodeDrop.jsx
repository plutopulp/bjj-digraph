import React from "react";
import { useDrop, useDragLayer } from "react-dnd";

import { useGraphOps } from "../hooks/useGraphOps";
import { DropManager } from "../lib/dropManager";
import { dragTypes } from "../config/dragTypes";

// A hook to drop nodes from the palette to the canvas
export const useNodeDrop = (graphRef, wrapperRef) => {
  const { handleCreateNode } = useGraphOps();

  // Creates a node of suitable type under the mouse cursor
  const handleDrop = () => {
    // Calculates the absolute position for dropping
    const dropManager = new DropManager(
      [mousePosition.x, mousePosition.y],
      graphRef,
      wrapperRef
    );
    const dropPosition = dropManager.getDropPosition();
    if (dropPosition)
      handleCreateNode(dropPosition[0], dropPosition[1], itemType.subtype);
  };

  const [{ itemType }, dropRef] = useDrop({
    accept: dragTypes.NODE,
    drop: handleDrop,
    collect: (monitor) => ({
      itemType: monitor.getItem(),
    }),
  });

  // Tracks the mouse position during drag
  const mousePosition = useDragLayer((monitor) => monitor.getClientOffset());

  return dropRef;
};
