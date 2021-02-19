import React from "react";
import { useAPI, useMountedEffect } from "../../../../../../hooks";
import { routes } from "../../../../../../lib/config/routes/routes";
import Graph from "../../../../../common/graph/graphView/graph";

// The Graph Image displayed in a BJJ map card
const Image = ({ id }) => {
  const { token, read } = useAPI();
  const [nodes, setNodes] = React.useState([]);
  const [edges, setEdges] = React.useState([]);

  useMountedEffect(() => {
    read(routes.api.nodes(id).list, setNodes);
  }, [token]);

  useMountedEffect(() => {
    read(routes.api.edges(id).list, setEdges);
  }, [token]);

  const settings = {
    readOnly: true,
    showControls: false,
    showToolbox: false,
    disableBackspace: true,
    layoutEngine: "None",
    minZoom: 0.05,
    maxZoom: 1.5,
  };
  return (
    <Graph
      width="100%"
      height="300"
      nodes={nodes}
      setNodes={setNodes}
      edges={edges}
      setEdges={setEdges}
      settings={settings}
    />
  );
};

export default Image;
