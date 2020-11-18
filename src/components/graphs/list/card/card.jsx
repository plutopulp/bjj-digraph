import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Card } from "semantic-ui-react";
import { formatDistance } from "date-fns";

import { useAPI, useHovered, useMountedEffect } from "../../../../hooks/index";
import { routes } from "../../../../lib/config/routes/routes";
import { Graph } from "../../../graph/graph";

const Wrapper = styled.div`
  margin: 2em;
`;

const CardContainer = ({ id, title, createdAt, description, slug }) => {
  const { token, list } = useAPI();
  const [hovered, ref] = useHovered(false);
  const [nodes, setNodes] = React.useState([]);
  const [edges, setEdges] = React.useState([]);

  useMountedEffect(() => {
    list(routes.api.nodes(id).list, setNodes);
  }, [token]);

  useMountedEffect(() => {
    list(routes.api.edges(id).list, setEdges);
  }, [token]);

  return (
    <Wrapper ref={ref}>
      <Card raised={hovered}>
        <Graph
          width="100%"
          height="20%"
          showGraphControls={false}
          readOnly={true}
          nodes={nodes}
          setNodes={setNodes}
          edges={edges}
          setEdges={setEdges}
        />
        <Card.Content>
          <Card.Header>
            <NavLink
              to={{
                pathname: routes.pages.graphs.detail(slug),
                state: { graphId: id },
              }}
            >
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
