import React from "react";
import { Visibility } from "semantic-ui-react";

// A HOC which triggers/toggles bottom passed prop when the
// the bottom of the inner component has been passed in the viewport
const withBottomPassedHOC = (InnerComp) => (props) => {
  const setBottomPassed = props.setBottomPassed;
  return (
    <Visibility
      once={false}
      onBottomPassed={() => setBottomPassed(true)}
      onBottomPassedReverse={() => setBottomPassed(false)}
    >
      <InnerComp {...props} />
    </Visibility>
  );
};

export default withBottomPassedHOC;
