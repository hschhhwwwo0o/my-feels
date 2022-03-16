import React, { FunctionComponent } from "react";

const LogoFeedback: FunctionComponent = () => {
  return (
    <div role={"banner"}>
      <h1 className="text-xl lg:text-3xl dark:text-white">
        <i>my </i>
        <span className="font-bold">feels </span>
        <span>feedback</span>
      </h1>
    </div>
  );
};

export default LogoFeedback;
