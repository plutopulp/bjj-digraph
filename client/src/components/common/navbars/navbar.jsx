import React from "react";
import HomeNavbar from "./home/navbar";
import AppNavbar from "./app/navbar";
import { useLocation } from "react-router-dom";
import { routes } from "../../../lib/config/routes/routes";

const Navbar = ({ fixed }) => {
  const location = useLocation();
  React.useEffect(() => console.log(location), [location]);
  return location.pathname.startsWith(routes.pages.app) ? (
    <AppNavbar fixed={fixed} />
  ) : (
    <HomeNavbar fixed={fixed} />
  );
};

export default Navbar;
