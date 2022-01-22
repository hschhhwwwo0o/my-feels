import React, { FunctionComponent, ReactNode } from "react";

const TheLayout: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return (
    <main>
      <div>{children}</div>
    </main>
  );
};

export default TheLayout;
