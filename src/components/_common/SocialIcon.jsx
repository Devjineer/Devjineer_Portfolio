import React from "react";
import IconWrapper from "./IconWrapper";

const SocialIcon = ({ href, icon }) => {
  return (
    <a href={href} className="">
      <IconWrapper src={icon} styling="size-5" addedIconStyles="" />
    </a>
  );
};

export default SocialIcon;
