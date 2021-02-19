import React from "react";

import { GraphsContext } from "../../../../contexts/graphs";
import Card from "./card/card";
import { Card as UICard } from "semantic-ui-react";

const GraphCardList = () => {
  const { graphs } = React.useContext(GraphsContext);

  return (
    <UICard.Group>
      {graphs.map((graph) => (
        <Card
          key={graph.id}
          title={graph.title}
          createdAt={graph.createdAt}
          description={graph.description}
          id={graph.id}
          slug={graph.slug}
        />
      ))}
    </UICard.Group>
  );
};

export default GraphCardList;
