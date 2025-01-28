import React, { Children } from "react";

export const DevGridSheet = ({ children, styling }) => {
  const childrenElements = Children.toArray(children);
  const displayChildren = () => {
    return (
      <>
        {childrenElements.map((child) => {
          const isMyChild =
            child.type.name === "DevGridItem" ||
            "RegularList" ||
            "VantaBackground";
          return isMyChild && child;
        })}
      </>
    );
  };

  return <div className={styling}>{displayChildren()}</div>;
};

export const DevGridItem = ({ children, styling }) => {
  return <div className={styling}>{children}</div>;
};
