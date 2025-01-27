import React from "react";
import { AboutMe, Hero, RecentWorks, WhatIDo } from "../components/home";
import { Footer } from "../components/_common";

const Home = () => {
  return (
    <>
      <Hero />
      <WhatIDo />
      <AboutMe />
      <RecentWorks />
      <Footer />
    </>
  );
};

export default Home;
