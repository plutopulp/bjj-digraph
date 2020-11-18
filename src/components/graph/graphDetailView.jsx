import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { GraphContext } from "../../contexts/graph";
import { GraphsContext } from "../../contexts/graphs";
import { Palette } from "../palette/palette";
import { Graph } from "./graph";
import { useAPIControllerTMP } from "../../hooks";
import { routes } from "../../lib/config/routes/routes";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const GraphDetailViewContainer = (props) => {
  const location = useLocation();
  const id = location.state.graphId;
  const { nodes, setNodes, edges, setEdges, selected } = React.useContext(
    GraphContext
  );

  useAPIControllerTMP(nodes, setNodes, routes.api.nodes(id));
  useAPIControllerTMP(edges, setEdges, routes.api.edges(id));

  return (
    <Wrapper>
      <Palette />
      <Graph
        nodes={nodes}
        edges={edges}
        selected={selected}
        readOnly={false}
        showGraphControls={true}
      />
    </Wrapper>
  );
};

export default GraphDetailViewContainer;
