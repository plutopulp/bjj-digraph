import React from "react";
import About from "./about";
import Contact from "./contact";
import Landing from "./landing";

const Home = () => {
  return (
    <React.Fragment>
      <Landing />
      <About />
      <Contact />
    </React.Fragment>
  );
};

export default Home;
