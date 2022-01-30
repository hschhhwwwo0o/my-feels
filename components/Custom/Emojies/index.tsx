import React, { Dispatch, FunctionComponent, SetStateAction } from "react";

interface IEmojies {
  value: string[];
  setValue: Dispatch<SetStateAction<string[]>>;
}

const Emojies: FunctionComponent<IEmojies> = ({ value = [], setValue = () => {} }) => {
  function onClickHandler(type: string) {
    if (value.includes(type)) {
      setValue([...value.filter(v => v != type)]);
    } else {
      setValue([...value, type]);
    }
  }

  return (
    <>
      <div className="flex flex-row gap-3 items-center relative -top-[1px]">
        <img
          onClick={() => {
            onClickHandler("cry");
          }}
          src="/emoji/cry.png"
          alt=""
          className={`w-[22px] h-[22px] cursor-pointer transition-all duration-300 filter ${
            value.includes("cry") ? "" : "grayscale"
          }`}
        />
        <img
          onClick={() => {
            onClickHandler("love");
          }}
          src="/emoji/love.png"
          alt=""
          className={`w-[22px] h-[22px] cursor-pointer transition-all duration-500 delay-75 filter ${
            value.includes("love") ? "" : "grayscale"
          }`}
        />
        <img
          onClick={() => {
            onClickHandler("smile");
          }}
          src="/emoji/smile.png"
          alt=""
          className={`w-[22px] h-[22px] cursor-pointer transition-all duration-700 delay-100 filter ${
            value.includes("smile") ? "" : "grayscale"
          }`}
        />
        <img
          onClick={() => {
            onClickHandler("sparkles");
          }}
          src="/emoji/sparkles.png"
          alt=""
          className={`w-[22px] h-[22px] cursor-pointer transition-all duration-1000 delay-150 filter ${
            value.includes("sparkles") ? "" : "grayscale"
          }`}
        />
      </div>
    </>
  );
};

export default Emojies;
