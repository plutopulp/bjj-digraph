import React from "react";

import { NavWrapperInner, NavWrapperOuter } from "../common/styles";
import HomeItems from "../common/items/home";
import AppItem from "../common/items/appLink";
import UserDropdown from "../common/items/userDropdown";
import withNavbarMenuHOC from "../../../hocs/withNavbarMenu";

// fixed prop passed to AuthNavbar but only used in HOC
const AuthNavbar = () => (
  <NavWrapperOuter>
    <NavWrapperInner>
      <HomeItems />
      <AppItem />
    </NavWrapperInner>
    <UserDropdown />
  </NavWrapperOuter>
);

export default withNavbarMenuHOC(AuthNavbar);
