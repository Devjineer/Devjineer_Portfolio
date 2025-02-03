import React from "react";
import { TitleDescription } from "../_common";

const XpCard = ({
  company,
  startDate,
  endDate,
  role,
  styling,
}) => {
  return (
    <article className={styling}>
      <p className="text-sm">
        <span>{company}</span> <span>{startDate}</span> - <span>{endDate}</span>
      </p>

      <TitleDescription
        styling="mt-2"
        title={role}
        titleStyle="text-2xl lg:text-3xl damion"
      />
    </article>
  );
};

export default XpCard;
