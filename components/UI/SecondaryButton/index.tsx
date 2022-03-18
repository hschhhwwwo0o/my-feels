import React, { FunctionComponent, ReactNode } from "react";

interface ISecondaryButton {
  onClickHandler?: () => any;
  children?: ReactNode;
}

const SecondaryButton: FunctionComponent<ISecondaryButton> = ({
  children,
  onClickHandler = () => {},
}) => {
  return (
    <div>
      <button
        onClick={onClickHandler}
        className="w-full bg-[#FAFAFA] text-[#2F2F2F] py-[21px] rounded-md text-base px-5 font-semibold border-2 border-[#EAEAEA] dark:border-[#151515] transition-all duration-1000"
      >
        {children}
      </button>
    </div>
  );
};

export default SecondaryButton;
