import React from "react";
import styled from "styled-components";

import { NavFlexWrap } from "../common/styles";
import UserDropdown from "../common/items/userDropdown";
import LandingItem from "../common/items/landingLink";
import UserMapsItem from "../common/items/userMaps";
import withNavbarMenuHOC from "../../../../hocs/withNavbarMenu";
import NewMapItem from "../common/items/newMap";
import { GraphContext } from "../../../../contexts/graph/graph";
import CurrentMap from "../common/items/currentMap";

const NavWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const AppNavbar = ({ fixed }) => {
  const { currentGraphId } = React.useContext(GraphContext);
  React.useEffect(() => console.log(currentGraphId), [currentGraphId]);
  return (
    <NavWrapper>
      <NavFlexWrap>
        <LandingItem />
        <UserMapsItem />
        <NewMapItem />
        {currentGraphId && <CurrentMap />}
      </NavFlexWrap>
      <UserDropdown />
    </NavWrapper>
  );
};

export default withNavbarMenuHOC(AppNavbar);
