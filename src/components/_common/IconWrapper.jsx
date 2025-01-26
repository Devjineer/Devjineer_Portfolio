import React from "react";

const IconWrapper = ({
  styling,
  src,
  alt = "icon",
  addedIconStyles = "object-center object-cover",
}) => {
  return (
    <div className={styling}>
      <img src={src} alt={alt} className={`size-full ${addedIconStyles}`} />
    </div>
  );
};

export default IconWrapper;
