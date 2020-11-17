import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Card } from "semantic-ui-react";
import { formatDistance } from "date-fns";

import { useHovered } from "../../../../hooks/index";
import { routes } from "../../../../lib/config/routes/routes";
import { Graph } from "../../../graph/graph";

const Wrapper = styled.div`
  margin: 2em;
`;
const CardContainer = ({ id, title, createdAt, description }) => {
  const [hovered, ref] = useHovered(false);
  return (
    <Wrapper ref={ref}>
      <Card raised={hovered}>
        <Graph
          width="100%"
          height="20%"
          showGraphControls={false}
          readOnly={true}
        />
        <Card.Content>
          <Card.Header>
            <NavLink to={{ pathname: routes.pages.graphs.detail(id) }}>
              {title}
            </NavLink>
          </Card.Header>
          <Card.Meta>
            Created{" "}
            {formatDistance(new Date(createdAt), new Date(), {
              addSuffix: true,
            })}
          </Card.Meta>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
      </Card>
    </Wrapper>
  );
};
export default CardContainer;
