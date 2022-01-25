import React, { FunctionComponent } from "react";

const Input: FunctionComponent = () => {
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter text..."
          className="bg-[#FAFAFA] border-2 w-full border-[#EAEAEA] outline-none px-8 py-5 rounded-md mulish font-semibold text-[#242424] dark:text-[#8D8D8D] transition-all duration-700 focus:border-[#dadada] dark:focus:border-[#444444] placeholder-[#D3D3D3] dark:placeholder-[#8D8D8D] dark:bg-[#151515] dark:border-[#2D2D2D]"
        />
      </div>
    </>
  );
};

export default Input;
