import React, { Children } from "react";

export const DevGridSheet = ({ children, styling }) => {
  const childrenElements = Children.toArray(children);
  const displayChildren = () => {
    return (
      <>
        {childrenElements.map((child) => {
          const isMyChild = child.type.name === "DevGridItem" || "RegularList";
          return isMyChild && child;
        })}
      </>
    );
  };

  return <div className={styling}>{displayChildren()}</div>;
};

export const DevGridItem = ({ styling, title, id }) => {
  return (
    <div className={styling}>
      <h3 className="damion">{title}</h3>
    </div>
  );
};
