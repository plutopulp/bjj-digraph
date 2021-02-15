import React from "react";
import About from "./about/about";
import Contact from "./contact/contact";
import Landing from "./landing/landing";
import Test from "./test/test";

const Home = ({ setNavbarFixed }) => {
  return (
    <React.Fragment>
      <Landing setBottomPassed={setNavbarFixed} />
      <About />
      <Test />
      <Contact />
    </React.Fragment>
  );
};

export default Home;
