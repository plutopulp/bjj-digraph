import React from "react";

import { Button, Menu } from "semantic-ui-react";
import { useAuth } from "../../../../hooks";

const LoginItem = () => {
  const { isAuthenticated, loginWithPopup } = useAuth();
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
