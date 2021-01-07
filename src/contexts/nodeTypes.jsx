import React from "react";
import _, { join } from "lodash";
import { useAPI } from "../hooks";
import { routes } from "../lib/config/routes/routes";
import { getShape } from "../lib/config/shapes/shapes";

export const NodeTypesContext = React.createContext();

// A context provider for the various node types
export const NodeTypesProvider = ({ children }) => {
  // The backend node settings which associate an svg shape
  // and svg props, with a given node type "name" e.g. game-position-user
  const [nodeSettings, setNodeSettings] = React.useState([]);

  // The node types passed as props to a Graph component
  const [nodeTypes, setNodeTypes] = React.useState({});

  const { read } = useAPI();

  // Load the base/default node settings from the backend
  React.useEffect(() => {
    read(routes.api.settings.nodes, setNodeSettings);
  }, []);

  // Form the nodeTypes object from the backend node settings array
  React.useEffect(() => {
    const getHyphenizedNodeType = (nodeType) => {
      const type = [];
      type.push(nodeType.type, ...nodeType.subtype);
      return join(type, "-");
    };
    const newNodeTypes = nodeSettings.reduce((finalObj, item) => {
      const name = getHyphenizedNodeType(item.nodeType);
      return {
        ...finalObj,
        [name]: {
          name,
          // Get the JSX svg symbol associated with the shapeId
          shape: getShape(item.shapeId),
          ...item,
          shapeId: `#${item.shapeId}`,
        },
      };
    }, {});
    setNodeTypes(newNodeTypes);
  }, [nodeSettings]);

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
