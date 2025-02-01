import React from "react";

const RegularList = ({ data, component: Component, ...props }) => {
  return (
    <>
      {data.map((item) => (
        <Component {...{ ...item, ...props }} />
      ))}
    </>
  );
};

export default RegularList;
