import { icons, navlinks } from "@/constants";
import React from "react";
import { IconWrapper } from ".";

const Nav = ({ styling, liStyle, closeBtn, handleClick }) => {
  return (
    <nav className={styling}>
      {closeBtn && (
        <button
          onClick={handleClick}
          className="absolute top-4 right-4 cursor-pointer"
        >
          <IconWrapper src={icons.close} styling="size-10" />
        </button>
      )}

      {navlinks.map((link) => (
        <li key={link.title} className={liStyle}>
          <a href={link.href}>{link.title}</a>
        </li>
      ))}
    </nav>
  );
};

export default Nav;
