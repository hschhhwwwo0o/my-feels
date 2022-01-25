import React, { FunctionComponent } from "react";

const ThemeSwitch: FunctionComponent = () => {
  return (
    <>
      <div className="w-[196px] h-[36px] bg-[#F5F5F5] dark:bg-[#1A1A1A] rounded-lg flex items-center justify-center px-1 overflow-hidden font-semibold">
        <div className="flex items-center justify-center w-full text-[13px]">
          <div className="w-full h-[30px] rounded-lg flex items-center justify-center bg-[#FAFAFA] dark:bg-[#1A1A1A] dark:text-[#F5F5F5] cursor-pointer shadow-md">
            Light
          </div>
          <div className="w-full h-[30px] rounded-lg flex items-center justify-center cursor-pointer dark:bg-[#FAFAFA]">
            Dark
          </div>
        </div>
      </div>
    </>
  );
};

export default ThemeSwitch;