import React, { FunctionComponent } from "react";

const PrivacyPolicyCard: FunctionComponent = () => {
  return (
    <>
      <div className="border-2 border-[#EAEAEA] dark:border-[#2D2D2D] w-full rounded-3xl px-5 pt-6 pb-6 shadow-md mt-6">
        <div className="font-semibold text-lg text-[#242424] dark:text-[#ECECEC]">Privacy Policy</div>
        <div className="text-[#444444] dark:text-[#B2B2B2] mt-[14px] text-sm lg:text-base text-justify">
          Developer built the "My Feels" app as open source app. This SERVICE is provided by Developer at no cost and is
          intended for use as is.
          <br />
          <br />
          This page is used to inform visitors regarding my policies with the collection, use, and disclosure of
          Personal Information if anyone decided to use my Service.
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyCard;
