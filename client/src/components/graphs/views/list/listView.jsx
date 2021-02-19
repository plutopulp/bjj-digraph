import React from "react";
import styled from "styled-components";
import { Container } from "semantic-ui-react";
import { GraphsContext } from "../../../../contexts/graphs";
import EmptyListMessage from "./emptyListMessage";
import GraphCardList from "./cardList";

const StyledContainer = styled(Container)`
  margin-top: 4em;
`;

const GraphListView = () => {
  const { graphs } = React.useContext(GraphsContext);
  return (
    <StyledContainer>
      {graphs.length ? <GraphCardList /> : <EmptyListMessage />}
    </StyledContainer>
  );
};

export default GraphListView;
