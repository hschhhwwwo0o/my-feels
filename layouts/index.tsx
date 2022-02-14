import React, { FunctionComponent, ReactNode } from "react";

const TheLayout: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className="flex items-center justify-center px-5 lg:px-0">
      <div className="w-full max-w-xl">{children}</div>
    </main>
  );
};

export default TheLayout;
