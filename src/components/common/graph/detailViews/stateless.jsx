import React from "react";
import styled from "styled-components";
import { Palette } from "../../../palette/palette";
import { Graph } from "../graph";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

// Detail view container for an editable graph
// Data is bount to graph context

const StatelessGraphView = ({
  nodes,
  edges,
  selected,
  readOnly,
  showGraphControls,
}) => (
  <Wrapper>
    <Palette />
    <Graph
      nodes={nodes}
      edges={edges}
      selected={selected}
      readOnly={readOnly}
      showGraphControls={showGraphControls}
    />
  </Wrapper>
);

export default StatelessGraphView;
