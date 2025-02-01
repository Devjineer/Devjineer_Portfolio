import React from "react";

const Paragraphing = ({ paragraphs }) => {
  return (
    <>
      {paragraphs.map((item, index) => (<p key={index} className="mb-3 text-sm lg:text-base indent-8">{item}</p>))}
    </>
  );
};

export default Paragraphing;
