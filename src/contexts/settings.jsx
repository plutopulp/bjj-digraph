import React from "react";
import { useToggle } from "../hooks";

export const SettingsContext = React.createContext();

// Context provider for all the graph settings
export const SettingsProvider = ({ children }) => {
  const [readOnly, toggleReadOnly] = useToggle(false);
  const [showControls, toggleShowControls] = useToggle(true);
  const [layoutEngine, setLayoutEngine] = React.useState("VerticalTree");

  return (
    <SettingsContext.Provider
      value={{
        readOnly,
        toggleReadOnly,
        showControls,
        toggleShowControls,
        layoutEngine,
        setLayoutEngine,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
