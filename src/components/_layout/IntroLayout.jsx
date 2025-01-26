import React from "react";
import PaddedLayout from "./PaddedLayout";
import { TitleDescription } from "../_common";

const IntroLayout = ({ introTitle, introDesc, children, styling }) => {
  return (
    <PaddedLayout styling={styling}>
      <TitleDescription title={introTitle} desc={introDesc} titleStyle="damion text-[2rem]" descStyle="mt-3 text-sm" />
      {children}
    </PaddedLayout>
  );
};

export default IntroLayout;
