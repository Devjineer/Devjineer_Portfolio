import React from "react";
import { IconWrapper } from ".";

const Stack = ({ stacks }) => {
  return (
    <>
      <p className="text-2xl damion">Stack</p>
      <div className="flex items-center gap-x-5 mt-3">
        {stacks.map((item, index) => (
          <IconWrapper
            src={item}
            key={index}
            styling="size-6 lg:size-10"
            addedIconStyles=""
          />
        ))}
      </div>
    </>
  );
};

export default Stack;
