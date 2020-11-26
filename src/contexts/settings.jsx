import React from "react";

export const SettingsContext = React.createContext();

// Context provider for all the graph settings
export const SettingsProvider = ({ children }) => {
  const [readOnly, setReadOnly] = React.useState(false);

  return (
    <SettingsContext.Provider value={{ readOnly, setReadOnly }}>
      {children}
    </SettingsContext.Provider>
  );
};
