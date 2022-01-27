import { NextRouter, useRouter } from "next/router";
import React, { FunctionComponent, ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import { TypedDispatch } from "redux";
import { reAuthenticate } from "redux/user/asyncActions";

const ThePreApplicationLayout: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const dispatch: TypedDispatch = useDispatch();
  const router: NextRouter = useRouter();

  useEffect(() => {
    dispatch(reAuthenticate(router));
  }, []);

  return (
    <div className="">
      <div className="bg-[#FAFAFA] min-h-screen dark:bg-[#151515] transition-all duration-1000">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ThePreApplicationLayout;
