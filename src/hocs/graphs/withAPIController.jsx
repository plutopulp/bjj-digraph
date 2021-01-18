import React from "react";
import { useLocation } from "react-router-dom";
import { useAPIController } from "../../hooks";
import { routes } from "../../lib/config/routes/routes";

const withAPIControllerHOC = (InnerComp) => (props) => {
  const { nodes, edges, setNodes, setEdges, disableAPI } = props;
  const location = useLocation();
  const id = location.state.graphId;
  useAPIController(nodes, setNodes, routes.api.nodes(id), disableAPI);
  useAPIController(edges, setEdges, routes.api.edges(id), disableAPI);

  return <InnerComp {...props} />;
};

export default withAPIControllerHOC;
