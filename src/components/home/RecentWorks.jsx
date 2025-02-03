import React from "react";
import { IntroLayout } from "../_layout";
import { projects, recentWorksDesc } from "../../constants";
import { DevGridItem, DevGridSheet } from "../_custom";
import { RegularList } from "../_design-patterns";
import { ProjectCard } from "../_cards";
import { VantaBackground } from "../_common";

const RecentWorks = () => {
  return (
    <IntroLayout
      introTitle="Explore My Portfolio"
      introDesc={recentWorksDesc}
      styling="bg-white"
      id="works"
    >
      <DevGridSheet styling="grid grid-cols-1 lg:grid-cols-3 grid-rows-2 gap-4 mt-6">
        <RegularList data={projects} component={ProjectCard} />

        <DevGridItem styling="h-[200px] lg:h-96 lg:rounded-br-2xl rounded-md bg-black">
          <VantaBackground styling="size-full" opacity={0.8} type={true} />
        </DevGridItem>
      </DevGridSheet>
    </IntroLayout>
  );
};

export default RecentWorks;
