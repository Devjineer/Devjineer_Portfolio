import React from "react";
import { IntroLayout } from "../_layout";
import { services, whatIDoDesc } from "../../constants";
import { RegularList } from "../_design-patterns";
import { ServiceCard } from "../_cards";

const WhatIDo = () => {
  return (
    <IntroLayout
      introTitle="How I Can Help"
      introDesc={whatIDoDesc}
      styling="bg-black text-white"
    >
      <div className="mt-10">
        <RegularList component={ServiceCard} data={services} />
      </div>
    </IntroLayout>
  );
};

export default WhatIDo;
