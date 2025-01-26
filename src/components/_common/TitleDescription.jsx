import React from "react";

const TitleDescription = ({ title, desc, titleStyle, descStyle, styling }) => {
  return (
    <div className={styling}>
      {title && <h3 className={titleStyle}>{title}</h3>}
      {desc && <p className={descStyle}>{desc}</p>}
    </div>
  );
};

export default TitleDescription;
