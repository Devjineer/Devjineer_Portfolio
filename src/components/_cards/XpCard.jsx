import React from "react";
import { TitleDescription } from "../_common";
import { Shimmer } from "../_custom";

const XpCard = ({
  company,
  startDate,
  endDate,
  role,
  description,
  styling,
}) => {
  return (
    <article className={styling}>
      <Shimmer styling="py-4">
        <p className="text-sm">
          <span>{company}</span> <span>{startDate}</span> -{" "}
          <span>{endDate}</span>
        </p>

        <TitleDescription
          styling="mt-2"
          title={role}
          titleStyle="text-2xl lg:text-3xl damion"
          desc={description}
        />
      </Shimmer>
    </article>
  );
};

export default XpCard;
