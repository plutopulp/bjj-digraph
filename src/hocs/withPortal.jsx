import React from "react";
import styled from "styled-components";
import { Segment, Portal } from "semantic-ui-react";

const StyledSegment = styled(Segment)`
  &.segment {
    position: fixed;
    top: 10%;
    z-index: 1000;
    margin: 0;
    padding: 0.2em;
    background: #ddd;
    transform: translateX(20em);
    transition: transform ease-in-out 1s;
  }
`;

const withPortalHOC = (InnerComp) => (props) => (
  <Portal open={props.open}>
    <StyledSegment raised>
      <InnerComp {...props} />
    </StyledSegment>
  </Portal>
);

export default withPortalHOC;
