import React from "react";
import { FooterPack, PaddedLayout } from "../_layout";
import Logo from "./Logo";
import { footerDesc, ownerInfo, quickLinks } from "../../constants";
import Connect from "./Connect";
import { RegularList } from "../_design-patterns";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <PaddedLayout styling="flex flex-col lg:flex-row gap-y-10 justify-between">
        <div className="w-full lg:w-[calc(100%/3)]">
          <Logo styling="text-3xl" />
          <p className="text-sm lg:text-base mt-4 mb-3">{footerDesc}</p>
          <Connect />
        </div>

        <FooterPack title="Contact Info" styling="text-sm lg:text-base space-y-3">
          <p>{ownerInfo.address}</p>
          <p>{ownerInfo.phone}</p>
          <a href={`mailto:${ownerInfo.email}`}>{ownerInfo.email}</a>
        </FooterPack>

        <FooterPack title="Quick Link" styling="">
          <div className="space-y-3">
            <RegularList
              data={quickLinks}
              component={({ title, href }) => <p className="text-sm lg:text-base">{title}</p>}
            />
          </div>
        </FooterPack>
      </PaddedLayout>
      <hr />
      <div className="side-padded py-5 text-center">
        <small>Copyright © 2025 | Powered by devjineer</small>
      </div>
    </footer>
  );
};

export default Footer;
