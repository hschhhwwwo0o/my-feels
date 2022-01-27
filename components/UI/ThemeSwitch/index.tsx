import React, { FunctionComponent } from "react";

const ThemeSwitch: FunctionComponent = () => {
  async function onClickHandler() {}

  return (
    <>
      <div
        className="w-[196px] h-[36px] bg-[#F5F5F5] dark:bg-[#1A1A1A] rounded-lg flex items-center justify-center px-1 overflow-hidden font-semibold transition-all duration-1000"
        onClick={onClickHandler}
      >
        <div className="flex items-center justify-center w-full text-[13px]">
          <div className="w-full h-[30px] rounded-lg flex items-center justify-center bg-[#FAFAFA] dark:bg-[#1A1A1A] dark:text-[#F5F5F5] cursor-pointer shadow-md transition-all duration-1000">
            Light
          </div>
          <div className="w-full h-[30px] rounded-lg flex items-center justify-center cursor-pointer dark:bg-[#FAFAFA] transition-all duration-1000">
            Dark
          </div>
        </div>
      </div>
    </>
  );
};

export default ThemeSwitch;
