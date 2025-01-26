import React from "react";

const RegularList = ({ data, component: Component }) => {
  return (
    <>
      {data.map((item) => (
        <Component {...{...item}} />
      ))}
    </>
  );
};

export default RegularList;
