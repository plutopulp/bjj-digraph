import React from "react";
import { SettingsContext } from "../../contexts/settings";

// A higher order component which binds the graph settings to the context
const withSettingsHOC = (InnerComp) => (props) => {
  const {
    readOnly,
    toggleReadOnly,
    showControls,
    toggleShowControls,
    layoutEngine,
  } = React.useContext(SettingsContext);
  return (
    <InnerComp
      {...props}
      readOnly={readOnly}
      toggleReadOnly={toggleReadOnly}
      showControls={showControls}
      toggleShowControls={toggleShowControls}
      layoutEngine={layoutEngine}
    />
  );
};

export default withSettingsHOC;
