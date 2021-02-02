import React from "react";
import { NavLink } from "react-router-dom";

import { Menu } from "semantic-ui-react";
import { routes } from "../../../../lib/config/routes/routes";

// Navbar menu item link to the app part of the site
const AppItem = () => {
  return (
    <NavLink to={{ pathname: routes.pages.graphs.list }}>
      <Menu.Item as="a" active={false}>
        App
      </Menu.Item>
    </NavLink>
  );
};

export default AppItem;
