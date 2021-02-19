import React from "react";
import { Icon, Message } from "semantic-ui-react";

const EmptyListMessage = () => (
  <Message icon>
    <Icon name="frown outline" />
    <Message.Content>
      <Message.Header>You Have No Maps</Message.Header>
      You can create one by clicking on <Icon name="plus" /> Map in the
      navigation menu above.
    </Message.Content>
  </Message>
);

export default EmptyListMessage;
