import React, { Dispatch, FunctionComponent, SetStateAction } from "react";

interface IEmojies {
  value: string[];
  setValue: Dispatch<SetStateAction<string[]>>;
}

const Emojies: FunctionComponent<IEmojies> = ({ value = [], setValue = () => {} }) => {
  return (
    <>
      <div className="flex flex-row gap-3 items-center">
        <img
          onClick={() => {
            setValue([...value, "cry"]);
          }}
          src="/emoji/cry.png"
          alt=""
          className={`w-[22px] h-[22px] cursor-pointer transition-all duration-500 filter ${
            value.includes("cry") ? "" : "grayscale"
          }`}
        />
        <img
          onClick={() => {
            setValue([...value, "love"]);
          }}
          src="/emoji/love.png"
          alt=""
          className={`w-[22px] h-[22px] cursor-pointer transition-all duration-500 filter ${
            value.includes("love") ? "" : "grayscale"
          }`}
        />
        <img
          onClick={() => {
            setValue([...value, "smile"]);
          }}
          src="/emoji/smile.png"
          alt=""
          className={`w-[22px] h-[22px] cursor-pointer transition-all duration-500 filter ${
            value.includes("smile") ? "" : "grayscale"
          }`}
        />
        <img
          onClick={() => {
            setValue([...value, "sparkles"]);
          }}
          src="/emoji/sparkles.png"
          alt=""
          className={`w-[22px] h-[22px] cursor-pointer transition-all duration-500 filter ${
            value.includes("sparkles") ? "" : "grayscale"
          }`}
        />
      </div>
    </>
  );
};

export default Emojies;
