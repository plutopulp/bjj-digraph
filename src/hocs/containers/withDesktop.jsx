import React from "react";
import { Media } from "../../contexts/media";

const withDesktopHOC = (InnerComp) => (props) => (
  <Media greaterThan="mobile">
    <InnerComp {...props} mobile={false} />
  </Media>
);
export default withDesktopHOC;
