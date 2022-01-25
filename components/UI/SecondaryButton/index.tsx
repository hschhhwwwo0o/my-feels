import React, { FunctionComponent } from "react";

const SecondaryButton: FunctionComponent = ({ children }) => {
  return (
    <>
      <div>
        <button className="w-full bg-[#FAFAFA] text-[#2F2F2F] py-[21px] rounded-md text-base px-5 font-semibold border-2 border-[#EAEAEA] dark:border-[#151515] transition-all duration-1000">
          {children}
        </button>
      </div>
    </>
  );
};

export default SecondaryButton;
