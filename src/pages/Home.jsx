import React from "react";
import { AboutMe, Hero, RecentWorks, WhatIDo } from "../components/home";
import { Footer, IconWrapper } from "../components/_common";
import { images } from "@/constants";

const Home = () => {
  return (
    <>
      <IconWrapper
        src={images.wavyBg}
        styling="fixed top-0 left-0 h-screen -z-10"
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
