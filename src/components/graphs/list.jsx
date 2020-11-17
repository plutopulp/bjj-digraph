import React from "react";
import { Card } from "semantic-ui-react";
import { GraphsContext } from "../../contexts/graphs";

const GraphCardList = () => {
  const { graphs } = React.useContext(GraphsContext);

  React.useEffect(() => console.log("here"), []);

  return (
    <Card.Group>
      {graphs.map((graph) => (
        <Card key={graph.id}>
          <Card.Content>{graph.title}</Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
};

export default GraphCardList;
