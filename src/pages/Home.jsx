import React from "react";

import Navbar from "../components/Navbar";
// import Navbar2 from "../components/Navbar2";
import Main1 from "../components/Main1";
import Main2 from "../components/Main2";
import Main3 from "../components/Main3";
import Main4 from "../components/Main4";
import Main5 from "../components/Main5";
import Main6 from "../components/Main6";
import Footer from "../components/Footer";
import Team from "../components/team";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [location.state]);

  return (
    <>
      <Navbar />
      <Main1 />
      <Main2 />
      <Main3 />
      <Main4 />
      <Main5 />
      <Main6 />
      <Footer />
    </>
  );
};

export default Home;
