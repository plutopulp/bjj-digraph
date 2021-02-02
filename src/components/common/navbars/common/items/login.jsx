import React from "react";

import { Button, Menu } from "semantic-ui-react";
import { useAuth } from "../../../../../hooks";

import { Modal, Loader } from "semantic-ui-react";

const Loading = ({ active }) => (
  <Modal open={active}>
    <Loader size="huge">Loading</Loader>
  </Modal>
);

const LoginItem = () => {
  const { isLoading, loginWithRedirect } = useAuth();
  return (
    <React.Fragment>
      <Menu.Item as="a">
        <Button inverted onClick={loginWithRedirect} size="small">
          Log In
        </Button>
      </Menu.Item>
      <Loading active={isLoading} />
    </React.Fragment>
  );
};

export default LoginItem;
