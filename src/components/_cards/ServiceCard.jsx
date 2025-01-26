import React from "react";
import { TitleDescription } from "../_common";

const ServiceCard = ({ id, title, description }) => {
  return (
    <article className="mb-10 w-full lg:w-[calc(100/3)]">
      <span className="damion text-[2rem]">{id.toString().padStart(2, 0)}</span>
      <TitleDescription
        title={title}
        titleStyle="text-lg lg:text-2xl font-bold"
        desc={description}
        descStyle="text-sm lg:text-base mt-3 text-ash"
      />
    </article>
  );
};

export default ServiceCard;
