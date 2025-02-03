import { IntroLayout } from "../_layout";
import { DevGridSheet } from "../_custom";
import { RegularList } from "../_design-patterns";
import { aboutItems } from "@/constants";
import { AboutCard } from "../_cards";

const AboutMe = () => {
  return (
    <IntroLayout introTitle="About Me" styling="bg-black/3 backdrop-blur-sm" id="about">
      <DevGridSheet styling="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <RegularList data={aboutItems} component={AboutCard} />
      </DevGridSheet>
    </IntroLayout>
  );
};

export default AboutMe;
