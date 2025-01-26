import React from "react";
import { TitleDescription } from "../_common";

const ServiceCard = ({ id, title, description }) => {
  return (
    <article className="mb-10">
      <p className="damion text-[2rem]">{id.toString().padStart(2, 0)}</p>
      <TitleDescription title={title} titleStyle="text-lg font-bold" desc={description} descStyle="text-sm mt-3" />
    </article>
  );
};

export default ServiceCard;
