import React from "react";

const FooterPack = ({ title, styling, children }) => {
  return (
    <div className={styling}>
      <h3 className="damion text-[22.4px] mb-5">{title}</h3>
      {children}
    </div>
  );
};

export default FooterPack;
