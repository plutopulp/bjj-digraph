import React from "react";
import styled from "styled-components";
import { Button, Icon } from "semantic-ui-react";

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 3em;
  width: 20em;
  z-index: 1000;
`;

const Image = styled.img`
  width: 20px;
`;

const ToolBoxContainer = () => {
  return (
    <Wrapper>
      <Button.Group>
        <Button icon compact>
          <Image src="../media/icons/grid.svg" alt="Grid" />
        </Button>
        <Button icon compact>
          <Icon name="lock" />
        </Button>
      </Button.Group>
    </Wrapper>
  );
};

export default ToolBoxContainer;
