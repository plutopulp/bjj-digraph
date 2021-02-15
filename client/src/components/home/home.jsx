import React from "react";
import Navbar from "../common/navbars/home/navbar";
import About from "./about";
import Contact from "./contact";
import Landing from "./landing/landing";

const Home = ({ setNavbarFixed }) => {
  return (
    <React.Fragment>
      <Landing setBottomPassed={setNavbarFixed} />
      <About />
      <Contact />
    </React.Fragment>
  );
};

export default Home;
