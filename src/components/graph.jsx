import React from "react";
import { GraphView, Edge, Node, GraphUtils } from "react-digraph";
import styled from "styled-components";

import { graphConfig } from "../config/graphConfig";
import { graph as graphData } from "../fixtures/graph";

const NODE_KEY = "id";
const { nodeTypes, nodeSubTypes, edgeTypes } = graphConfig;

const GraphWrapper = styled.div`
  width: 100%;
  height: 1000px;
`;

export const Graph = () => {
  const [nodes, setNodes] = React.useState(graphData.nodes);
  const [edges, setEdges] = React.useState(graphData.edges);
  const [selected, setSelected] = React.useState({});

  return (
    <GraphWrapper>
      <GraphView
        nodeKey={NODE_KEY}
        nodes={nodes}
        edges={edges}
        selected={selected}
        nodeTypes={nodeTypes}
        nodeSubtypes={nodeSubTypes}
        edgeTypes={edgeTypes}
      />
    </GraphWrapper>
  );
};
