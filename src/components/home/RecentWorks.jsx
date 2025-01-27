import React from "react";
import { IntroLayout } from "../_layout";
import { projects, recentWorksDesc } from "../../constants";
import { DevGridItem, DevGridSheet } from "../_custom";
import { RegularList } from "../_design-patterns";

const RecentWorks = () => {
  return (
    <IntroLayout
      introTitle="Explore My Portfolio"
      introDesc={recentWorksDesc}
      styling="bg-white"
    >
      <DevGridSheet styling="grid grid-cols-1 lg:grid-cols-3 grid-rows-2 gap-4 mt-6">
        <RegularList data={projects} component={DevGridItem} />
      </DevGridSheet>
    </IntroLayout>
  );
};

export default RecentWorks;
