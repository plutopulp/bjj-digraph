import React from "react";
import styled from "styled-components";

import { GraphsContext } from "../../../contexts/graphs";
import Card from "./card/card";
import { Card as UICard, Container } from "semantic-ui-react";
import AppNavbar from "../../common/navbars/app/navbar";

const StyledContainer = styled(Container)`
  margin-top: 10em;
`;

const GraphCardList = () => {
  const { graphs } = React.useContext(GraphsContext);

  return (
    <React.Fragment>
      <AppNavbar fixed={true} />
      <StyledContainer>
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
      </StyledContainer>
    </React.Fragment>
  );
};

export default GraphCardList;
