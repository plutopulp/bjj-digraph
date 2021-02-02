import React from "react";
import { NavLink } from "react-router-dom";

import { Button, Menu } from "semantic-ui-react";
import { routes } from "../../../../lib/config/routes/routes";

const GraphsItem = () => {
  return (
    <Menu.Item>
      <Button as="a" inverted>
        <NavLink to={{ pathname: routes.pages.graphs.list }}>My Maps</NavLink>
      </Button>
    </Menu.Item>
  );
};

export default GraphsItem;
