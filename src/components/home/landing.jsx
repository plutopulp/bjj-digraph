import React from "react";
import { useContextRef } from "react-context-refs";

import styled from "styled-components";
import { Container, Segment, Header } from "semantic-ui-react";

import { useWindowSize } from "../../hooks";
import withBottomPassedHOC from "../../hocs/withBottomPassed";
import Graph from "../common/graph/graphView/graph";
import { NodeTypesContext } from "../../contexts/nodeTypes";

const StyledSegment = styled(Segment)`
  &.ui.segment {
    padding: 4em;
    background: #2f303a10;
  }
`;
const Banner = styled(Container)`
  position: absolute;
  z-index: 1000;
  left: 12.5%;
  top: 40%;
`;
const Title = styled(Header)`
  &.ui.header {
    color: #2f303a;
    margin: 0 0 0.25em 0;
  }
`;

const Spacer = styled.div`
  margin: 1em 0;
`;
const Subtitle = styled(Header)`
  &.ui.header {
    color: #2f303acc;
    margin: 0.25em 0;
  }
`;

const graphSettings = {
  readOnly: true,
  showControls: false,
  showToolbox: false,
  disableBackspace: true,
  layoutEngine: "None",
  minZoom: 0.75,
  maxZoom: 0.75,
};

const Landing = () => {
  const [nodes, setNodes] = React.useState([]);
  const [edges, setEdges] = React.useState([]);
  const windowSize = useWindowSize();
  const ref = useContextRef("section", { name: "landing" });
  const { nodeTypes } = React.useContext(NodeTypesContext);
  return (
    <div ref={ref} id="home">
      <Banner text>
        <StyledSegment circular compact>
          <Title size="huge">Connect your game</Title>
          <Title size="large">with bjj-paths</Title>
          <Spacer />
          <Subtitle size="medium">A mind-mapping tool for</Subtitle>
          <Subtitle size="medium">Brazilian Jiu-Jitsu</Subtitle>
        </StyledSegment>
      </Banner>
      <Graph
        width="100%"
        height={windowSize}
        nodes={nodes}
        setNodes={setNodes}
        edges={edges}
        setEdges={setEdges}
        settings={graphSettings}
        nodeTypes={nodeTypes}
      />
    </div>
  );
};

export default withBottomPassedHOC(Landing);
