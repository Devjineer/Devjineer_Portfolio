import React from "react";

const Shimmer = ({ children, styling }) => {
  return (
    <div
      className={`animation-shimmer items-center justify-center rounded-lg border bg-[length:200%_100%] px-6 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${styling}`}
    >
      {children}
    </div>
  );
};

export default Shimmer;
