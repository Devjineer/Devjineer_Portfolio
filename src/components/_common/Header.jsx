import React from "react";
import { Logo, MobileNav, Nav } from ".";

const Header = () => {
  return (
    <header className="min-h-[70px] flex-apart">
      <Logo styling="text-2xl" />
      <MobileNav />
      <Nav styling="hidden lg:flex items-center list-none" liStyle="ms-4 text-sm" />
    </header>
  );
};

export default Header;
