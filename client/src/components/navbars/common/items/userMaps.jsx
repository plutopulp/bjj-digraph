import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import { Menu } from "semantic-ui-react";
import { routes } from "../../../../lib/config/routes/routes";

const UserMapsItem = () => {
  const location = useLocation();
  React.useState(() => console.log(location), [location]);
  return (
    <NavLink to={{ pathname: routes.pages.graphs.list }}>
      <Menu.Item
        as="a"
        active={
          location ? location.pathname === routes.pages.graphs.list : false
        }
      >
        My Maps
      </Menu.Item>
    </NavLink>
  );
};

export default UserMapsItem;
