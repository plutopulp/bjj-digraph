import React from "react";
import { SettingsContext } from "../../contexts/settings";

// A higher order component which binds the graph settings to the context
const withSettingsHOC = (InnerComp) => (props) => {
  const {
    readOnly,
    toggleReadOnly,
    showControls,
    toggleShowControls,
  } = React.useContext(SettingsContext);
  return (
    <InnerComp
      {...props}
      readOnly={readOnly}
      toggleReadOnly={toggleReadOnly}
      showControls={showControls}
      toggleShowControls={toggleShowControls}
    />
  );
};

export default withSettingsHOC;
