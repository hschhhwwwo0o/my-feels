import Logo from "components/UI/Logo";
import React, { FunctionComponent } from "react";

const LoadingModal: FunctionComponent<{ isLoading: boolean }> = props => {
  return (
    <>
      <div
        className={`w-screen h-screen fixed top-0 left-0 bg-[#FAFAFA] transition-all duration-1000 dark:bg-[#151515] flex items-center justify-center py-20 delay-1000 ${
          !props.isLoading ? "opacity-0 -z-10" : "z-[10000]"
        }`}
      >
        <div className="h-full animate-pulse flex flex-col items-center justify-between">
          <div />
          <div className={`-mt-7 ${!props.isLoading && "opacity-0"} transition-opacity duration-1000`}>
            <div>
              <Logo />
            </div>
          </div>
          <div />
        </div>
      </div>
    </>
  );
};

export default LoadingModal;
