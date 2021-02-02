import React from "react";
import styled from "styled-components";
import { Dropdown, Image, Menu } from "semantic-ui-react";
import { useAuth } from "../../../../hooks";
import { routes } from "../../../../lib/config/routes/routes";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const UserDropdown = () => {
  const { user, logout } = useAuth();
  React.useEffect(() => console.log(user), [JSON.stringify(user)]);

  const handleLogout = () => {
    logout({ returnTo: routes.pages.home });
  };
  return (
    <Wrapper>
      {user.picture && <Image size="mini" circular src={user.picture} />}
      <Dropdown
        item
        simple
        text={user.given_name ? `Hey ${user.given_name}` : `Hey there`}
      >
        <Dropdown.Menu>
          <Dropdown.Item>Profile</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Wrapper>
  );
};

export default UserDropdown;
