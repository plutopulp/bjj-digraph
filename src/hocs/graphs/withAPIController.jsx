import React from "react";
import { useLocation } from "react-router-dom";
import { useAPIController } from "../../hooks";
import { routes } from "../../lib/config/routes/routes";

const withAPIControllerHOC = (InnerComp) => (props) => {
  const { nodes, edges, setNodes, setEdges } = props;
  const location = useLocation();
  const id = location.state.graphId;
  useAPIController(nodes, setNodes, routes.api.nodes(id));
  useAPIController(edges, setEdges, routes.api.edges(id));

  return <InnerComp {...props} />;
};

export default withAPIControllerHOC;
