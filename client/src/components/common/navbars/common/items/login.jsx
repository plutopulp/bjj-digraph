import React from "react";

import { Button, Menu } from "semantic-ui-react";
import { useAuth } from "../../../../../hooks";

import { Modal, Loader } from "semantic-ui-react";
import Loading from "../../../messages/loading";

const LoginItem = () => {
  const { isLoading, loginWithRedirect } = useAuth();
  return (
    <React.Fragment>
      <Menu.Item as="a">
        <Button inverted onClick={loginWithRedirect} size="small">
          Log In
        </Button>
      </Menu.Item>
      <Loading isLoading={isLoading} message="Logging you in, one sec..." />
    </React.Fragment>
  );
};

export default LoginItem;
