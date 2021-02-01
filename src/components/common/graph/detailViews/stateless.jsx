import React from "react";
import Graph from "../graphView/graph";

// Base detail view for a graph.
// Does not have its own state but gets it via props
const StatelessGraphView = ({
  nodes,
  edges,
  selected,
  doubleClicked,
  selectedNodes,
  selectedEdges,
  settings,
  settingsSetters,
}) => (
  <Graph
    nodes={nodes}
    edges={edges}
    selected={selected}
    doubleClicked={doubleClicked}
    selectedNodes={selectedNodes}
    selectedEdges={selectedEdges}
    settings={settings}
    settingsSetters={settingsSetters}
  />
);

export default StatelessGraphView;
