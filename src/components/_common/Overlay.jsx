import React from "react";

const Overlay = ({ styling, children }) => {
  return (
    <div className={`inset-0 absolute ${styling}`}>{children}</div>
  );
};

export default Overlay;
