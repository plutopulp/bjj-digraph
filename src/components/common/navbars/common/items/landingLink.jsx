import React from "react";
import { NavLink } from "react-router-dom";

import { Menu } from "semantic-ui-react";
import { routes } from "../../../../../lib/config/routes/routes";

// Navbar menu item link to the app part of the site
const LandingItem = () => {
  return (
    <NavLink to={{ pathname: routes.pages.home }}>
      <Menu.Item as="a" active={false}>
        Home
      </Menu.Item>
    </NavLink>
  );
};

export default LandingItem;
