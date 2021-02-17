import React from "react";
import styled from "styled-components";
import { Dropdown, Image, Menu } from "semantic-ui-react";
import { useAuth, useToggle } from "../../../../hooks";
import { routes } from "../../../../lib/config/routes/routes";
import Profile from "../../../common/profile";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const UserDropdown = () => {
  const { user, logout } = useAuth();
  const [showProfile, toggleProfile] = useToggle(false);
  React.useEffect(() => console.log(user), [JSON.stringify(user)]);

  const handleLogout = () => {
    logout({ returnTo: process.env.REACT_APP_SITE_URL });
  };
  return (
    <React.Fragment>
      <Wrapper>
        {user && user.picture && (
          <Image size="mini" circular src={user.picture} />
        )}
        <Dropdown
          item
          simple
          text={
            user && user.given_name ? `Hey ${user.given_name}` : `Hey there`
          }
        >
          <Dropdown.Menu>
            <Dropdown.Item onClick={toggleProfile}>Profile</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Wrapper>
      <Profile open={showProfile} handleClose={toggleProfile} />
    </React.Fragment>
  );
};

export default UserDropdown;
