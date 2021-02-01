import React from "react";
import { Media } from "../../contexts/media";

const withMobileHOC = (InnerComp) => (props) => (
  <Media at="mobile">
    <InnerComp {...props} mobile={true} />
  </Media>
);
export default withMobileHOC;
