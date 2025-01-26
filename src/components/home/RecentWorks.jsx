import React from "react";
import { IntroLayout } from "../_layout";
import { recentWorksDesc } from "../../constants";

const RecentWorks = () => {
  return (
    <IntroLayout
      introTitle="Explore My Portfolio"
      introDesc={recentWorksDesc} styling="bg-white"
    ></IntroLayout>
  );
};

export default RecentWorks;
