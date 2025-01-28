import React from "react";
import { DevGridItem } from "../_custom";
import { IconWrapper, Overlay, TitleDescription } from "../_common";

const ProjectCard = ({ styling, title, company, stack, projectImage, id }) => {
  return (
    <DevGridItem styling={`relative overflow-hidden ${styling}`}>
      <IconWrapper src={projectImage} styling="h-full w-full" />
            <Overlay styling="bg-black/50 text-white p-4 flex flex-col justify-between">
              <span className={`damion text-lg ${id === 1 ? "lg:text-7xl" : "lg:text-3xl"}`}>
                {id.toString().padStart(2, 0)}
              </span>

              <TitleDescription
                title={title}
                desc={company}
                titleStyle={`${id === 1 ? "lg:text-4xl" : "lg:text-2xl"} text-xl underline`}
                descStyle="text-sm mt-1"
              />
            </Overlay>
    </DevGridItem>
  );
};

export default ProjectCard;
