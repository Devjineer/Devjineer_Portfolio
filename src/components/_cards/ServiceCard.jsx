import React from "react";
import { TitleDescription } from "../_common";
import { Shimmer } from "../_custom";

const ServiceCard = ({ id, title, description, icon }) => {
  return (
    <Shimmer styling="mb-10 lg:mb-0 py-5 w-full lg:w-[calc(100/3)]">
      <span className="damion text-[2rem]">{id.toString().padStart(2, 0)}</span>
      <TitleDescription
        icon={icon}
        title={title}
        titleStyle="text-lg lg:text-2xl font-bold text-white"
        desc={description}
        descStyle="text-sm lg:text-base mt-3 text-ash"
      />
    </Shimmer>
  );
};

export default ServiceCard;
