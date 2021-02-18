import React from "react";

import HomeItems from "../common/items/home";
import LoginItem from "../common/items/login";
import { NavWrapperInner, NavWrapperOuter } from "../common/styles";
import withNavbarMenuHOC from "../../../hocs/withNavbarMenu";
import TestAppItem from "../common/items/testAppLink";
import ContactItem from "../common/items/contact";

const NonAuthNavbar = ({ fixed }) => {
  return (
    <NavWrapperOuter>
      <NavWrapperInner>
        <HomeItems />
        <ContactItem />
        <TestAppItem />
      </NavWrapperInner>
      <LoginItem />
    </NavWrapperOuter>
  );
};

export default withNavbarMenuHOC(NonAuthNavbar);
