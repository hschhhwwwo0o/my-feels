import React, { FunctionComponent } from "react";

const AboutCard: FunctionComponent = () => {
  return (
    <div className="border-2 border-[#EAEAEA] dark:border-[#2D2D2D] w-full rounded-3xl px-5 pt-6 pb-6 shadow-md">
      <div className="font-semibold text-lg text-[#242424] dark:text-[#ECECEC]">About</div>
      <div className="text-[#444444] dark:text-[#B2B2B2] mt-[14px] text-sm lg:text-base text-justify">
        "My Feels" is a service for writing notes about your well-being with a minimal user interface.
        <br />
        <br />
        Feel free to express your emotions to yourself, don't be ashamed of your feelings, don't be ashamed to be
        yourself and your feeling will always be fine, we believe in it.
      </div>
    </div>
  );
};

export default AboutCard;
