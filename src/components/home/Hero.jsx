import React from "react";
import { Button, Header, SecondaryButton, TitleDescription } from "../_common";
import { heroTitle, icons } from "../../constants";

const Hero = () => {
  return (
    <section className="pb-14 lg:pb-40 side-padded lg:h-screen">
      <Header />

      <TitleDescription
        title={heroTitle}
        titleStyle="damion text-[2.7rem] text-center md:text-7xl lg:text-8xl"
        styling="mt-10 mb-14 lg:mt-40"
      />

      <div className="flex-together">
        <Button text="Explore Work" styling="font-bold text-sm" />
        <SecondaryButton
          text="Learn More"
          styling="font-bold ml-3 text-sm"
          iconLeft={icons.arrow}
          iconStyle="size-4 mr-1"
        />
      </div>
    </section>
  );
};

export default Hero;
