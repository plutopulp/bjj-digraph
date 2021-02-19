import React from "react";
import styled from "styled-components";
import { Dropdown, Icon, Image, Menu } from "semantic-ui-react";
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
            <Dropdown.Item onClick={handleLogout}>
              <Icon name="sign out" /> Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Wrapper>
      <Profile open={showProfile} handleClose={toggleProfile} />
    </React.Fragment>
  );
};

export default UserDropdown;

// Removed from dropdown until components written properly

//<Dropdown.Item onClick={toggleProfile}>
//  <Icon name="user" />
//  Profile
//</Dropdown.Item>
//<Dropdown.Item>
//  <Icon name="cog" />
//  Settings
//</Dropdown.Item>
//<Dropdown.Divider />
