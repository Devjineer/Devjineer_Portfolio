import React from "react";
import { AboutMe, Hero, RecentWorks, WhatIDo } from "../components/home";
import { Footer, IconWrapper } from "../components/_common";
import { images } from "../constants";

const Home = () => {
  return (
    <>
      <IconWrapper
        styling="h-full w-full fixed top-0 left-0 -z-10"
        src={images.wavyBg}
      />
      <Hero />
      <WhatIDo />
      <AboutMe />
      <RecentWorks />
      <Footer />
    </>
  );
};

export default Home;
