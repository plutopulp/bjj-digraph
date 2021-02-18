import React from "react";
import Landing from "./landing/landing";

const Home = ({ setNavbarFixed }) => {
  return (
    <React.Fragment>
      <Landing setBottomPassed={setNavbarFixed} />
    </React.Fragment>
  );
};

export default Home;
