import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { GraphContext } from "../../contexts/graph";
import { Palette } from "../palette/palette";
import { Graph } from "./graph";
import { useAPIController } from "../../hooks";
import { routes } from "../../lib/config/routes/routes";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

// Detail view container for an editable graph
// Data is bount to graph context
const GraphDetailViewContainer = (props) => {
  const location = useLocation();
  const id = location.state.graphId;
  const { nodes, setNodes, edges, setEdges, selected } = React.useContext(
    GraphContext
  );

  // When unmounting, reset context data
  // Avoids previous mounted graph data to appear momentarily
  React.useEffect(() => {
    return () => {
      setNodes([]);
      setEdges([]);
    };
  }, []);

  useAPIController(nodes, setNodes, routes.api.nodes(id));
  useAPIController(edges, setEdges, routes.api.edges(id));

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
