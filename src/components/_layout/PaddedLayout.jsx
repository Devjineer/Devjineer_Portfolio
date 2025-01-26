import React from "react";

const PaddedLayout = ({ children, styling }) => {
  return (
    <section className={`min-h-20 side-padded py-20 ${styling}`}>
      {children}
    </section>
  );
};

export default PaddedLayout;
