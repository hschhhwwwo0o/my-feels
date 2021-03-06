import React, { FunctionComponent } from "react";

const Logo: FunctionComponent = () => {
  return (
    <div role={"banner"}>
      <h1 className="text-xl lg:text-3xl dark:text-white transition-all duration-1000">
        <i>my </i>
        <span className="font-bold">feels</span>
      </h1>
    </div>
  );
};

export default Logo;
