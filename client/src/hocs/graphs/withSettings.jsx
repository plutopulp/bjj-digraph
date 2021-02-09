import React from "react";
import { SettingsContext } from "../../contexts/graph/settings";

// A higher order component which binds the graph settings to the context
const withSettingsHOC = (InnerComp) => (props) => {
  const { settings, settingsSetters } = React.useContext(SettingsContext);
  return (
    <InnerComp
      {...props}
      settings={settings}
      settingsSetters={settingsSetters}
    />
  );
};

export default withSettingsHOC;
