import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Menu,
  Segment,
  Button,
  Message,
  Icon,
  Portal,
} from "semantic-ui-react";

import { StyledMenu } from "./styles";

const Navbar = () => {
  const {
    isLoading,
    error,
    isAuthenticated,
    logout,
    loginWithPopup,
  } = useAuth0();

  return (
    <StyledMenu fixed inverted pointing secondary size="large">
      <Menu.Item>
        {!isAuthenticated && (
          <Button as="a" inverted onClick={loginWithPopup}>
            Log In
          </Button>
        )}

        {isAuthenticated && (
          <Button
            as="a"
            inverted
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Log Out
          </Button>
        )}
      </Menu.Item>
    </StyledMenu>
  );
};

const AuthLoading = ({ isLoading }) => {
  return (
    <Portal open={isLoading}>
      <Segment
        style={{
          left: "20%",
          position: "fixed",
          top: "10%",
          zIndex: 1000,
        }}
      >
        <Message icon>
          <Icon name="circle notched" loading />
          <Message.Content>
            <Message.Header>Just one second... </Message.Header>
          </Message.Content>
        </Message>
      </Segment>
    </Portal>
  );
};

//if (error) return <div>Oops...{error.message}</div>;
//return null;

const MessageWrapper = ({ open, children }) => (
  <Portal open={open}>
    <Segment
      style={{
        left: "20%",
        position: "fixed",
        top: "10%",
        zIndex: 1000,
      }}
    >
      {children}
    </Segment>
  </Portal>
);

export default Navbar;
