import React from "react";
import _ from "lodash";
import { useAPI } from "../hooks";
import { routes } from "../lib/config/routes/routes";

export const NodeTypesContext = React.createContext();

export const NodeTypesProvider = ({ children }) => {
  const { read } = useAPI();
  const [nodeSettings, setNodeSettings] = React.useState([]);
  const [nodeTypes, setNodeTypes] = React.useState({});

  React.useEffect(() => {
    read(routes.api.settings.nodes, setNodeSettings);
  }, []);

  React.useEffect(() => {
    const newNodeTypes = nodeSettings.reduce((finalObj, item) => {
      return { ...finalObj, [item.nodeType]: _.omit(item, "nodeType", "id") };
    }, {});
    setNodeTypes(newNodeTypes);
  }, [nodeSettings]);

  React.useEffect(() => console.log(nodeSettings));
  React.useEffect(() => console.log(nodeTypes));

  return (
    <NodeTypesContext.Provider
      value={{
        nodeTypes,
      }}
    >
      {children}
    </NodeTypesContext.Provider>
  );
};
