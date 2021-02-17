import React from "react";

import { Button, Menu } from "semantic-ui-react";
import { useAuth } from "../../../../hooks";

const LoginItem = () => {
  const { loginWithRedirect } = useAuth();
  return (
    <React.Fragment>
      <Menu.Item as="a">
        <Button inverted onClick={loginWithRedirect} size="small">
          Log In
        </Button>
      </Menu.Item>
    </React.Fragment>
  );
};

export default LoginItem;
