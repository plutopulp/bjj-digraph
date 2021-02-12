import React from "react";
import { Menu } from "semantic-ui-react";
import { GraphContext } from "../../../../../contexts/graph/graph";
import { GraphsContext } from "../../../../../contexts/graphs";

const CurrentMap = () => {
  const { currentGraphId } = React.useContext(GraphContext);
  const { graphs } = React.useContext(GraphsContext);

  const getCurrentGraphTitle = () => {
    const graph = graphs.find((graph) => graph.id === currentGraphId);
    if (graph) return graph.title;
  };

  return (
    <Menu.Item as="a" active={true}>
      {getCurrentGraphTitle()}
    </Menu.Item>
  );
};

export default CurrentMap;
