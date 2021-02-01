import React from "react";

import { Button, Menu } from "semantic-ui-react";

import { useAuth0 } from "@auth0/auth0-react";

const LoginItem = () => {
  const { isLoading, error, isAuthenticated, loginWithPopup } = useAuth0();
  return (
    <Menu.Item position="right">
      {!isAuthenticated && (
        <Button inverted onClick={loginWithPopup} size="small">
          Log In
        </Button>
      )}
    </Menu.Item>
  );
};

export default LoginItem;
