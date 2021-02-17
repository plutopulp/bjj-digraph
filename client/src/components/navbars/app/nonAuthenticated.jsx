import React from "react";

import { NavWrapperInner, NavWrapperOuter } from "../common/styles";
import LandingItem from "../common/items/landingLink";
import withNavbarMenuHOC from "../../../hocs/withNavbarMenu";
import LoginItem from "../common/items/login";
import TestAppItem from "../common/items/testAppLink";

// The app navbar for non-authenticated users
const AppNavbar = ({ fixed }) => {
  return (
    <NavWrapperOuter>
      <NavWrapperInner>
        <LandingItem />
        <TestAppItem />
      </NavWrapperInner>
      <LoginItem />
    </NavWrapperOuter>
  );
};

export default withNavbarMenuHOC(AppNavbar);
