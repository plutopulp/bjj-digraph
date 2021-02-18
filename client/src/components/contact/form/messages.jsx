import React from "react";
import { Message } from "semantic-ui-react";

const SuccessMessage = ({ show }) =>
  show && (
    <Message
      success
      header="Message Sent!"
      content="We'll get back to you as soon as possible"
    />
  );

const InvalidMessage = ({ show }) =>
  show && (
    <Message
      negative
      header="Form Invalid!"
      content="Please fill out all the required fields correctly"
    />
  );

const ErrorMessage = ({ show }) =>
  show && (
    <Message
      negative
      header="Oops.. Something Went Wrong!"
      content="Please try again later"
    />
  );

export { SuccessMessage, InvalidMessage, ErrorMessage };
