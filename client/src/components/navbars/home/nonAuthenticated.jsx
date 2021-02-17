import React from "react";

import HomeItems from "../common/items/home";
import LoginItem from "../common/items/login";
import { NavFlexWrap } from "../common/styles";
import withNavbarMenuHOC from "../../../hocs/withNavbarMenu";

const NonAuthNavbar = ({ fixed }) => {
  return (
    <React.Fragment>
      <NavFlexWrap>
        <HomeItems />
      </NavFlexWrap>
      <LoginItem />
    </React.Fragment>
  );
};

export default withNavbarMenuHOC(NonAuthNavbar);
