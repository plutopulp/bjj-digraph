import React from "react";

import HomeItems from "../common/items/home";
import LoginItem from "../common/items/login";
import { NavWrapperInner, NavWrapperOuter } from "../common/styles";
import withNavbarMenuHOC from "../../../hocs/withNavbarMenu";

const NonAuthNavbar = ({ fixed }) => {
  return (
    <NavWrapperOuter>
      <NavWrapperInner>
        <HomeItems />
      </NavWrapperInner>
      <LoginItem />
    </NavWrapperOuter>
  );
};

export default withNavbarMenuHOC(NonAuthNavbar);
