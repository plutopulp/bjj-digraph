import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../../../../lib/config/routes/routes";

const Title = ({ id, slug, title }) => {
  return (
    <NavLink
      to={{
        pathname: routes.pages.graphs.detail(slug),
        state: { graphId: id },
      }}
    >
      {title}
    </NavLink>
  );
};
export default Title;
