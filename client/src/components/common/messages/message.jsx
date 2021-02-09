import React from "react";
import PropTypes from "prop-types";
import { Message } from "react-semantic-ui";

const CustomMessage = ({ header, content, icon }) => (
  <Message icon={icon}>
    {icon && { icon }}
    <Message.Content>
      <Message.Header>{header}</Message.Header>
      {content}
    </Message.Content>
  </Message>
);

CustomMessage.propTypes = {
  header: PropTypes.string,
  content: PropTypes.string,
  icon: PropTypes.node,
};

export default CustomMessage;
