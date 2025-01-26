import React from "react";
import Logo from "./Logo";
import IconWrapper from "./IconWrapper";
import { icons } from "../../constants";

const Header = () => {
  return (
    <header className="min-h-[70px] flex-apart">
      <Logo styling="text-2xl" />
      <IconWrapper src={icons.menu} />
    </header>
  );
};

export default Header;
