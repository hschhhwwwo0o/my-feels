import React, { Dispatch, FunctionComponent, SetStateAction } from "react";

interface IInput {
  type?: "text" | "password";
  placeholder?: string;
  value?: string;
  setValue?: Dispatch<SetStateAction<string>>;
}

const Input: FunctionComponent<IInput> = ({
  type = "text",
  placeholder = "Enter text...",
  value = "",
  setValue = () => {},
}) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => {
          setValue(e.target.value);
        }}
        className="bg-[#FAFAFA] border-2 w-full border-[#EAEAEA] outline-none px-8 py-5 rounded-md mulish font-semibold text-[#242424] dark:text-[#8D8D8D] transition-all duration-1000 focus:border-[#dadada] dark:focus:border-[#444444] placeholder-[#D3D3D3] dark:placeholder-[#8D8D8D] dark:bg-[#151515] dark:border-[#2D2D2D]"
      />
    </div>
  );
};

export default Input;
