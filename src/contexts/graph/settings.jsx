import React from "react";
import { useToggle } from "../../hooks";

export const SettingsContext = React.createContext();

// Context provider for all the graph settings
export const SettingsProvider = ({ children }) => {
  // Whether the graph is editable
  const [readOnly, toggleReadOnly] = useToggle(false);

  // The graph zoom controls
  const [showControls, toggleShowControls] = useToggle(true);

  // The graph toolbox
  const [showToolbox, setShowToolbox] = React.useState(true);

  // The layout engine type of the graph
  const [layoutEngine, setLayoutEngine] = React.useState("None");

  const [centerNodeOnMove, toggleCenterNodeOnMove] = useToggle(true);

  // For disabling node deletion on backspace
  const [disableBackspace, setDisableBackspace] = React.useState(false);

  // For disabling backend API calls. Used in the node editor,
  // where API call only occurs on submit
  const [disableAPI, setDisableAPI] = React.useState(false);

  const [gridDotSize, setGridDotSize] = React.useState(2);

  const [gridSpacing, setGridSpacing] = React.useState(40);

  const [gridSize, setGridSize] = React.useState(1000);
  const [maxZoom, setMaxZoom] = React.useState(2);
  const [minZoom, setMinZoom] = React.useState(0.1);

  return (
    <SettingsContext.Provider
      value={{
        readOnly,
        toggleReadOnly,
        showControls,
        toggleShowControls,
        layoutEngine,
        setLayoutEngine,
        centerNodeOnMove,
        toggleCenterNodeOnMove,
        disableBackspace,
        setDisableBackspace,
        disableAPI,
        setDisableAPI,
        settings: {
          readOnly,
          showControls,
          showToolbox,
          layoutEngine,
          centerNodeOnMove,
          disableBackspace,
          disableAPI,
          gridDotSize,
          gridSpacing,
          gridSize,
          maxZoom,
          minZoom,
        },
        settingsSetters: {
          toggleReadOnly,
          toggleShowControls,
          setShowToolbox,
          setLayoutEngine,
          toggleCenterNodeOnMove,
          setDisableBackspace,
          setDisableAPI,
          setGridDotSize,
          setGridSpacing,
        },
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
