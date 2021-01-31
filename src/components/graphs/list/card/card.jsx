import React from "react";
import { Card } from "semantic-ui-react";

import { useHovered } from "../../../../hooks/";

import { CardWrapper, HeaderWrapper } from "./styles";
import Image from "./image/image";
import Title from "./content/title";
import EditButtons from "./content/edit/editButtons";
import DateCreated from "./content/dateCreated";

const CardContainer = ({ id, title, createdAt, description, slug }) => {
  const [hovered, ref] = useHovered(false);

  return (
    <CardWrapper ref={ref}>
      <Card raised={hovered}>
        <Image id={id} />
        <Card.Content>
          <Card.Header>
            <HeaderWrapper>
              <Title id={id} title={title} slug={slug} />
              <EditButtons id={id} title={title} />
            </HeaderWrapper>
          </Card.Header>
          <Card.Meta>
            <DateCreated createdAt={createdAt} />
          </Card.Meta>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
      </Card>
    </CardWrapper>
  );
};
export default CardContainer;
