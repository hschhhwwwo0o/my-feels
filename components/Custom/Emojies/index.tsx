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

  const emojiesArray = [{ name: "cry" }, { name: "love" }, { name: "smile" }, { name: "sparkles" }];

  return (
    <div className="flex flex-row gap-3 items-center relative -top-[1px]">
      {emojiesArray.map(emoji => {
        return (
          <img
            onClick={() => {
              onClickHandler(emoji.name);
            }}
            src={`/emoji/${emoji.name}.png`}
            alt={emoji.name}
            className={`w-[22px] h-[22px] cursor-pointer transition-all duration-300 filter ${
              value.includes(emoji.name) ? "" : "grayscale"
            }`}
          />
        );
      })}
    </div>
  );
};

export default Emojies;
