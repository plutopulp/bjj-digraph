import React from "react";
import { GraphContext } from "../contexts/graph";

// A HOC which provides the node and edge context data
const withGraphContextHOC = (InnerComp) => (props) => {
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

  return (
    <InnerComp
      {...props}
      nodes={nodes}
      edges={edges}
      setNodes={setNodes}
      setEdges={setEdges}
      selected={selected}
      readOnly={false}
      showGraphControls={true}
    />
  );
};

export default withGraphContextHOC;
