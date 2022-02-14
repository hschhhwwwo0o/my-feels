import React, { Dispatch, FunctionComponent, SetStateAction } from "react";

interface IInputNoteTitleH2 {
  value?: string;
  setValue?: Dispatch<SetStateAction<string>>;
}

const InputNoteTitleH2: FunctionComponent<IInputNoteTitleH2> = ({ value = "", setValue = () => {} }) => {
  return (
    <input
      value={value}
      onChange={e => {
        setValue(e.target.value);
      }}
      type="text"
      className="text-lg lg:text-2xl bg-transparent font-semibold outline-none mt-6 text-[#242424] dark:text-[#ECECEC] placeholder-[#bebebe] dark:placeholder-[#545454]"
      placeholder="Enter Title"
    />
  );
};

export default InputNoteTitleH2;
