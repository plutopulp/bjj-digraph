import React from "react";
import Navbar from "../common/navbar/navbar";
import About from "./about";
import Contact from "./contact";
import Landing from "./landing";

const Home = () => {
  const [navbarFixed, setNavbarFixed] = React.useState(false);
  return (
    <React.Fragment>
      <Navbar fixed={navbarFixed} />
      <Landing setBottomPassed={setNavbarFixed} />
      <About />
      <Contact />
    </React.Fragment>
  );
};

export default Home;
