import React, { FunctionComponent, ReactNode } from "react";

interface IBrandButton {
  onClickHandler?: () => any;
  children?: ReactNode;
}

const BrandButton: FunctionComponent<IBrandButton> = ({ children, onClickHandler = () => {} }) => {
  return (
    <>
      <div>
        <button
          onClick={onClickHandler}
          className="w-full bg-[#151515] text-white py-[21px] rounded-md text-base px-5 font-semibold border-2 border-[#EAEAEA] dark:border-[#151515] transition-all duration-1000"
        >
          {children}
        </button>
      </div>
    </>
  );
};

export default BrandButton;
