import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import { Menu } from "semantic-ui-react";
import { routes } from "../../../../lib/config/routes/routes";

// Navbar menu item link to the test-app route
const TestAppItem = () => {
  const location = useLocation();
  return (
    <NavLink to={{ pathname: routes.pages.test }}>
      <Menu.Item as="a" active={location.pathname === routes.pages.test}>
        Test App
      </Menu.Item>
    </NavLink>
  );
};

export default TestAppItem;
