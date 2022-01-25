import React, { FunctionComponent } from "react";
import Emojies from "../Emojies";

const SearchInput: FunctionComponent = () => {
  return (
    <>
      <div className="w-full border-2 border-[#EAEAEA] dark:border-[#2D2D2D] rounded-md">
        <div className="flex flex-row items-center pr-8">
          <input
            type="text"
            placeholder="Search"
            className="bg-[#FAFAFA] w-full outline-none px-8 py-5 rounded-md mulish font-semibold text-[#242424] dark:text-[#8D8D8D] transition-all duration-700 placeholder-[#D3D3D3] dark:placeholder-[#8D8D8D] dark:bg-[#151515]"
          />
          <div className="w-44 flex justify-around h-14">
            <Emojies />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchInput;
