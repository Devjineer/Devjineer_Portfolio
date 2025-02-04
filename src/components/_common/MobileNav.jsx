import React from "react";
import { IconWrapper, Nav } from ".";
import { icons } from "@/constants";
import { useToggle } from "@/hooks";

const MobileNav = () => {
  const { toggleShow, toggleToAndFro } = useToggle();
  return (
    <>
      <button className="lg:hidden cursor-pointer" onClick={toggleToAndFro}>
        <IconWrapper src={icons.menu} />
      </button>

      {toggleShow && (
        <Nav
          styling="fixed top-0 left-0 list-none z-50 bg-white/60 backdrop-blur-sm w-full h-screen flex flex-col items-center justify-center"
          liStyle="text-3xl damion mb-3"
          handleClick={toggleToAndFro}
          closeBtn
        />
      )}
    </>
  );
};

export default MobileNav;
