import React from "react";
import { icons } from "../../constants";
import { IconWrapper, Logo } from ".";

const Header = () => {
  return (
    <header className="min-h-[70px] flex-apart">
      <Logo styling="text-2xl text-white" />
      <IconWrapper src={icons.menu} />
    </header>
  );
};

export default Header;
