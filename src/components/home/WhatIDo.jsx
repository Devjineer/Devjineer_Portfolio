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
      introDescStyle="text-white/75" id="services"
    >
      <div className="mt-10 lg:flex items-stretch justify-between gap-20 rounded">
        <RegularList component={ServiceCard} data={services} />
      </div>
    </IntroLayout>
  );
};

export default WhatIDo;
