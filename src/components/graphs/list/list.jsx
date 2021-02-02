import React from "react";

import { GraphsContext } from "../../../contexts/graphs";
import Card from "./card/card";
import { Card as UICard, Container } from "semantic-ui-react";
import AppNavbar from "../../common/navbars/app/navbar";

const GraphCardList = () => {
  const { graphs } = React.useContext(GraphsContext);

  return (
    <React.Fragment>
      <AppNavbar fixed={true} />
      <Container>
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
      </Container>
    </React.Fragment>
  );
};

export default GraphCardList;
