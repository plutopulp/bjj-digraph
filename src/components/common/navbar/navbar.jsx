import React from "react";
import { useAuth } from "../../../hooks";

import NonAuthNavbar from "./nonAuthenticated";
import AuthNavbar from "./authenticated";

const Navbar = ({ fixed }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? (
    <AuthNavbar fixed={fixed} />
  ) : (
    <NonAuthNavbar fixed={fixed} />
  );
};

export default Navbar;
