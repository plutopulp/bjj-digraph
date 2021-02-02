import React from "react";

import { Button, Menu } from "semantic-ui-react";
import { useAuth } from "../../../../hooks";

import { Modal, Loader } from "semantic-ui-react";

const Loading = ({ active }) => (
  <Modal open={active}>
    <Loader size="huge">Loading</Loader>
  </Modal>
);

const LogoutItem = () => {
  const { isAuthenticated, isLoading, logout } = useAuth();
  return (
    <React.Fragment>
      <Menu.Item position="right">
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
      <Loading active={isLoading} />
    </React.Fragment>
  );
};

export default LogoutItem;
