import React from "react";
import styled from "styled-components";
import { Segment, Portal } from "semantic-ui-react";

const StyledSegment = styled(Segment)`
  position: fixed;
  top: 10%;
  left: 20%;
  z-index: 1000;
`;

const withPortalHOC = (InnerComp) => (props) => (
  <Portal open={props.open}>
    <StyledSegment>
      <InnerComp {...props} />
    </StyledSegment>
  </Portal>
);

export default withPortalHOC;
