import React, { FunctionComponent } from "react";

const Emojies: FunctionComponent = () => {
  return (
    <>
      <div className="flex flex-row gap-3 items-center">
        <img src="emoji/cry.png" alt="" className="w-[22px] h-[22px] cursor-pointer" />
        <img src="emoji/love.png" alt="" className="w-[22px] h-[22px] cursor-pointer" />
        <img src="emoji/smile.png" alt="" className="w-[22px] h-[22px] cursor-pointer" />
        <img src="emoji/sparkles.png" alt="" className="w-[22px] h-[22px] cursor-pointer" />
      </div>
    </>
  );
};

export default Emojies;
