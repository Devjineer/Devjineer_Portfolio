import React from "react";
import { Button, Header, IconWrapper, SecondaryButton, TitleDescription } from "../_common";
import { heroTitle, icons, images } from "../../constants";

const Hero = () => {
  return (
    <section className="pb-14 lg:pb-40 relative side-padded">
      <IconWrapper
        styling="h-full w-full absolute top-0 left-0 -z-10"
        src={images.wavyBg}
      />

      <Header />

      <TitleDescription
        title={heroTitle}
        titleStyle="damion text-[3.1rem] text-center md:text-7xl lg:text-8xl"
        styling="mt-10 mb-14 lg:mt-20"
      />

      <div className="flex-together">
        <Button text="Explore Work" styling="font-bold text-sm" />
        <SecondaryButton text="Learn More" styling="font-bold ml-3 text-sm" iconLeft={icons.arrow} iconStyle="size-4 mr-1" />
      </div>
    </section>
  );
};

export default Hero;
