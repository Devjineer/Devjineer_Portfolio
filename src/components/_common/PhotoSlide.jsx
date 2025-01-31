import React from "react";
import { Button } from ".";
import { icons } from "@/constants";

const PhotoSlide = () => {
  return <div className="border-4 h-[200px] lg:h-full relative">
    <Button iconLeft={icons.direction} iconStyle="size-6" variant="clear" styling="absolute top-1/2 -translate-y-1/2 p-0" />

    <Button iconLeft={icons.direction} iconStyle="size-6" variant="clear" styling="absolute right-0 top-1/2 -translate-y-1/2 p-0 rotate-180" />
  </div>;
};

export default PhotoSlide;
