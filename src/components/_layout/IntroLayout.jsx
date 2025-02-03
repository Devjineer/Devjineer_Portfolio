import React from "react";
import PaddedLayout from "./PaddedLayout";
import { TitleDescription } from "../_common";

const IntroLayout = ({ introTitle, introDesc, children, styling, introDescStyle, id }) => {
  return (
    <PaddedLayout id={id} styling={styling}>
      <TitleDescription
        title={introTitle}
        desc={introDesc}
        titleStyle="damion text-[2rem] lg:text-[80px]"
        descStyle={`mt-3 text-sm lg:text-base ${introDescStyle}`}
        styling="w-full lg:max-w-[800px]"
      />
      {children}
    </PaddedLayout>
  );
};

export default IntroLayout;
