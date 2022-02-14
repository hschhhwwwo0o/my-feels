import React, { FunctionComponent } from "react";

const Validate: FunctionComponent<{ isValidate: boolean }> = ({ children, isValidate = true }) => {
  return (
    <div className={`${isValidate ? "opacity-100" : "opacity-60 pointer-events-none"} transition-opacity duration-500`}>
      {children}
    </div>
  );
};

export default Validate;
