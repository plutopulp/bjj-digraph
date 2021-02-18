import React from "react";
import styled from "styled-components";
import { Container, Segment, List, Header } from "semantic-ui-react";
import withModalHOC from "../../../../../../../hocs/withModal";

const Wrapper = styled.div`
  padding: 2em;
`;

const Menu = () => {
  return (
    <Wrapper>
      <Header as="h2" textAlign="center">
        Help Menu
      </Header>
      <List relaxed>
        <List.Item>
          <List.Header>Create Node</List.Header>
          Drag a node from the palette on the left and drop it onto the map.
        </List.Item>

        <List.Item>
          <List.Header>Select Node</List.Header>
          Click on the node.
        </List.Item>

        <List.Item>
          <List.Header>Edit Node</List.Header>
          Double click on the node.
        </List.Item>
        <List.Item>
          <List.Header>Delete Node</List.Header>
          Select the node, then Backspace
        </List.Item>
        <List.Item>
          <List.Header>Copy Node</List.Header>
          Select a node, then Ctrl/Cmd + C
        </List.Item>
        <List.Item>
          <List.Header>Paste Node</List.Header>
          Ctrl/Cmd + V
        </List.Item>

        <List.Item>
          <List.Header>Create Link/Arrow</List.Header>
          Shift + Click on a node, then drag mouse to target node.
        </List.Item>
        <List.Item>
          <List.Header>Swap Link/Arrow</List.Header>
          Click on arrow-head, then drag mouse to target node.
        </List.Item>

        <List.Item>
          <List.Header>Highlight Node</List.Header>S + Click on a node
        </List.Item>
        <List.Item>
          <List.Header>Connecting Paths</List.Header>
          Highlight 2 nodes and click "Find Connecting Paths". Make sure to
          highlight the starting node first!
        </List.Item>
        <List.Item>
          <List.Header>Un-select / Un-highlight all</List.Header>
          Esc
        </List.Item>
      </List>
    </Wrapper>
  );
};

export default withModalHOC(Menu);
