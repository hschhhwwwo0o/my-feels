import React, { FunctionComponent, ReactNode } from "react";

const TheLayout: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};

export default TheLayout;
