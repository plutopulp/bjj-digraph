import React from "react";
import styled from "styled-components";

import { NavFlexWrap } from "../common/styles";
import HomeItems from "../common/items/home";
import AppItem from "../common/items/appLink";
import UserDropdown from "../common/items/userDropdown";
import withNavbarMenuHOC from "../../../hocs/withNavbarMenu";

const NavWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
// fixed prop passed to AuthNavbar but only used in HOC
const AuthNavbar = () => (
  <NavWrapper>
    <NavFlexWrap>
      <HomeItems />
      <AppItem />
    </NavFlexWrap>
    <UserDropdown />
  </NavWrapper>
);

export default withNavbarMenuHOC(AuthNavbar);
