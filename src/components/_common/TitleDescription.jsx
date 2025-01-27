import React from "react";
import { IconWrapper } from ".";

const TitleDescription = ({
  title,
  desc,
  titleStyle,
  descStyle,
  styling,
  icon,
}) => {
  return (
    <div className={styling}>
      <div className="flex items-center">
        {icon && <IconWrapper src={icon} styling="size-7 p-1 rounded-full mr-3 rounded-full bg-gray-400/40 backdrop-blur-md" addedIconStyles="" />}
        {title && <h3 className={titleStyle}>{title}</h3>}
      </div>
      {desc && <p className={descStyle}>{desc}</p>}
    </div>
  );
};

export default TitleDescription;
