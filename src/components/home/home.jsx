import React from "react";
import { useContextRef } from "react-context-refs";

import styled from "styled-components";
import { Segment } from "semantic-ui-react";

import { useWindowSize } from "../../hooks";

const StyledSegment = styled(Segment)`
  min-height: ${({ height }) => height}px;
  position: relative;
  &.segment.vertical {
    background: #e5e5e5;
  }
`;

const Home = () => {
  const windowSize = useWindowSize();
  const ref = useContextRef("section", { name: "home" });
  return (
    <div ref={ref} id="home">
      <StyledSegment vertical height={windowSize.height} />
    </div>
  );
};

export default Home;
