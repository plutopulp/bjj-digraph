import React from "react";
import styled from "styled-components";

import { Container } from "semantic-ui-react";

import { NavFlexWrap, NavbarMenu } from "../common/styles";
import UserDropdown from "../common/items/userDropdown";
import LandingItem from "../common/items/landingLink";
import UserMapsItem from "../common/items/userMaps";
import withNavbarMenuHOC from "../../../../hocs/withNavbarMenu";
import NewMapItem from "../common/items/newMap";

const NavWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const AppNavbar = ({ fixed }) => {
  return (
    <NavWrapper>
      <NavFlexWrap>
        <LandingItem />
        <UserMapsItem />
        <NewMapItem />
      </NavFlexWrap>
      <UserDropdown />
    </NavWrapper>
  );
};

export default withNavbarMenuHOC(AppNavbar);
