import React from "react";
import { useAuth } from "../../../../hooks";

import NonAuthNavbar from "./nonAuthenticated";
import AuthNavbar from "./authenticated";

const HomeNavbar = ({ fixed }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? (
    <AuthNavbar fixed={fixed} />
  ) : (
    <NonAuthNavbar fixed={fixed} />
  );
};

export default HomeNavbar;
