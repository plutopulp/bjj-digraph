import React from "react";
import { GraphContext } from "../../contexts/graph";

// A HOC which binds the node and edge data to the context
const withGraphContextHOC = (InnerComp) => (props) => {
  const {
    nodes,
    setNodes,
    edges,
    setEdges,
    selected,
    selectedNodes,
    selectedEdges,
    setSelected,
    disableAPI,
  } = React.useContext(GraphContext);

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
      setNodes={setNodes}
      edges={edges}
      setEdges={setEdges}
      selected={selected}
      selectedNodes={selectedNodes}
      selectedEdges={selectedEdges}
      setSelected={setSelected}
      disableAPI={disableAPI}
    />
  );
};

export default withGraphContextHOC;
