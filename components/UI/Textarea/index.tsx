import React, { Dispatch, FunctionComponent, SetStateAction } from "react";

interface ITextarea {
  value: string;
  setValue?: Dispatch<SetStateAction<string>>;
}

const Textarea: FunctionComponent<ITextarea> = ({ value = "", setValue = () => {} }) => {
  return (
    <textarea
      value={value}
      onChange={e => {
        setValue(e.target.value);
      }}
      className="mt-5 w-full bg-transparent font-medium text-[#444444] dark:text-[#B2B2B2] outline-none text-justify h-[3000px] placeholder-[#bebebe] dark:placeholder-[#545454]"
      placeholder="Enter text"
    />
  );
};

export default Textarea;
