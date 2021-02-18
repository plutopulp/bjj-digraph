import React from "react";
import Contact from "./contact/contact";
import Landing from "./landing/landing";

const Home = ({ setNavbarFixed }) => {
  return (
    <React.Fragment>
      <Landing setBottomPassed={setNavbarFixed} />
      <Contact />
    </React.Fragment>
  );
};

export default Home;
