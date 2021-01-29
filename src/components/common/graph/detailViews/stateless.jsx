import React from "react";
import styled from "styled-components";
import { Palette } from "../../../palette/palette";
import Graph from "../graphView/graph";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

// Base detail view for a graph.
// Does not have its own state but gets it via props
const StatelessGraphView = ({
  nodes,
  edges,
  selected,
  doubleClicked,
  selectedNodes,
  selectedEdges,
  readOnly,
  showControls,
  layoutEngine,
  disableBackspace,
}) => (
  <Wrapper>
    <Palette />
    <Graph
      nodes={nodes}
      edges={edges}
      selected={selected}
      doubleClicked={doubleClicked}
      readOnly={readOnly}
      showControls={showControls}
      selectedNodes={selectedNodes}
      selectedEdges={selectedEdges}
      layoutEngine={layoutEngine}
      disableBackspace={disableBackspace}
    />
  </Wrapper>
);

export default StatelessGraphView;
