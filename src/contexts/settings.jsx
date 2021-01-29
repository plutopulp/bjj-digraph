import React from "react";
import { useToggle } from "../hooks";

export const SettingsContext = React.createContext();

// Context provider for all the graph settings
export const SettingsProvider = ({ children }) => {
  // Whether the graph is editable
  const [readOnly, toggleReadOnly] = useToggle(false);
  // The graph zoom controls
  const [showControls, toggleShowControls] = useToggle(true);
  // The layout engine type of the graph
  const [layoutEngine, setLayoutEngine] = React.useState("None");
  const [centerNodeOnMove, toggleCenterNodeOnMove] = useToggle(true);
  // For disabling node deletion on backspace
  const [disableBackspace, setDisableBackspace] = React.useState(false);
  // For disabling backend API calls. Used in the node editor,
  // where API call only occurs on submit
  const [disableAPI, setDisableAPI] = React.useState(false);

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
          layoutEngine,
          centerNodeOnMove,
          disableBackspace,
          disableAPI,
        },
        settingsSetters: {
          toggleReadOnly,
          toggleShowControls,
          setLayoutEngine,
          toggleCenterNodeOnMove,
          setDisableBackspace,
          setDisableAPI,
        },
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
