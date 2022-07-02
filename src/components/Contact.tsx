import React from "react";
import { FbLogo } from "../../public/assets/vectors/fb-logo";
import { IgLogo } from "../../public/assets/vectors/ig-logo";
import { TwitterLogo } from "../../public/assets/vectors/twitter-logo";

export const Contact = () => {
  return (
    <div className="items-center justify-end hidden w-full pt-3 md:flex">
      <div className="flex flex-row space-x-4">
        <a href="https://www.instagram.com/sgcu.chula" target="_blank">
          <IgLogo />
        </a>
        <a href="https://web.facebook.com/sgcu.chula" target="_blank">
          <FbLogo />
        </a>
        <a href="https://twitter.com/sgcu_chula" target="_blank">
          <TwitterLogo />
        </a>
      </div>
    </div>
  );
};
