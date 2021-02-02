import React from "react";
import { NavLink } from "react-router-dom";

import { Button, Menu } from "semantic-ui-react";
import { routes } from "../../../../../lib/config/routes/routes";

const GraphsItem = () => {
  return (
    <NavLink to={{ pathname: routes.pages.graphs.list }}>
      <Menu.Item>My Maps</Menu.Item>
    </NavLink>
  );
};

export default GraphsItem;
