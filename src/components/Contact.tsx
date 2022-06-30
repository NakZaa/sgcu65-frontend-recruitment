import React from "react";
import { FbLogo } from "../../public/assets/vectors/fb-logo";
import { IgLogo } from "../../public/assets/vectors/ig-logo";
import { TwitterLogo } from "../../public/assets/vectors/twitter-logo";

export const Contact = () => {
  return (
    <div className="items-center justify-end hidden w-full pt-3 md:flex">
      <div className="flex flex-row space-x-4">
        <IgLogo />
        <FbLogo />
        <TwitterLogo />
      </div>
    </div>
  );
};
