import React from "react";

import { NavWrapperInner, NavWrapperOuter } from "../common/styles";
import UserDropdown from "../common/items/userDropdown";
import LandingItem from "../common/items/landingLink";
import UserMapsItem from "../common/items/userMaps";
import withNavbarMenuHOC from "../../../hocs/withNavbarMenu";
import NewMapItem from "../common/items/newMap";
import { GraphContext } from "../../../contexts/graph/graph";
import CurrentMap from "../common/items/currentMap";

const AppNavbar = ({ fixed }) => {
  const { currentGraphId } = React.useContext(GraphContext);
  React.useEffect(() => console.log(currentGraphId), [currentGraphId]);
  return (
    <NavWrapperOuter>
      <NavWrapperInner>
        <LandingItem />
        <UserMapsItem />
        <NewMapItem />
        {currentGraphId && <CurrentMap />}
      </NavWrapperInner>
      <UserDropdown />
    </NavWrapperOuter>
  );
};

export default withNavbarMenuHOC(AppNavbar);
