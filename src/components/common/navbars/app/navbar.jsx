import React from "react";
import styled from "styled-components";

import { Container } from "semantic-ui-react";

import { NavFlexWrap, NavbarMenu } from "../common/styles";
import UserDropdown from "../common/items/userDropdown";
import LandingItem from "../common/items/landingLink";
import GraphsItem from "../common/items/graphs";
import withNavbarMenuHOC from "../../../../hocs/withNavbarMenu";

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
        <GraphsItem />
      </NavFlexWrap>
      <UserDropdown />
    </NavWrapper>
  );
};

export default withNavbarMenuHOC(AppNavbar);
