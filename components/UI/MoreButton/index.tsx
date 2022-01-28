import React, { FunctionComponent } from "react";

interface IMoreButton {
  onClickHandler: () => any;
}

const MoreButton: FunctionComponent<IMoreButton> = ({ onClickHandler = () => {} }) => {
  return (
    <>
      <div onClick={onClickHandler}>
        <button className="w-[70px] h-[70px] border-2 rounded-md flex items-center justify-center border-[#EAEAEA] bg-[#FAFAFA] transition-all duration-1000">
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
