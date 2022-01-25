import React, { FunctionComponent, ReactNode } from "react";

const ThePreApplicationLayout: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <div className="bg-[#FAFAFA] min-h-screen dark:bg-[#151515] transition-all duration-1000">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ThePreApplicationLayout;
