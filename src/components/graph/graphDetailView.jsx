import React from "react";
import styled from "styled-components";
import { GraphContext } from "../../contexts/graph";
import { GraphsContext } from "../../contexts/graphs";
import { APIController } from "../APIController";
import { Palette } from "../palette/palette";
import { Graph } from "./graph";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const GraphDetailViewContainer = (props) => {
  const { graphId } = props.match.params;
  const { graphs } = React.useContext(GraphsContext);
  const { setCurrentGraphId } = React.useContext(GraphContext);

  console.log(props);

  return (
    <Wrapper>
      <Palette />
      <APIController />
      <Graph />
    </Wrapper>
  );
};

export default GraphDetailViewContainer;
