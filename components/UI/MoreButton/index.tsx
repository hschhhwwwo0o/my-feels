import React, { FunctionComponent } from "react";

const MoreButton: FunctionComponent = () => {
  return (
    <>
      <div>
        <button className="w-[70px] h-[70px] border-2 rounded-md flex items-center justify-center border-[#EAEAEA] bg-[#FAFAFA]">
          <div className="flex flex-row gap-1">
            <div className="w-[5px] h-[5px] bg-[#2F2F2F] rounded-full" />
            <div className="w-[5px] h-[5px] bg-[#2F2F2F] rounded-full" />
            <div className="w-[5px] h-[5px] bg-[#2F2F2F] rounded-full" />
          </div>
        </button>
      </div>
    </>
  );
};

export default MoreButton;
