import { NextRouter, useRouter } from "next/router";
import React, { FunctionComponent, ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "redux";
import { TypedDispatch } from "redux";
import { setNotes } from "redux/notes/asyncActions";
import { reAuthenticate } from "redux/user/asyncActions";

const ThePreApplicationLayout: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const { user }: IStore = useSelector((store: IStore) => store);
  const dispatch: TypedDispatch = useDispatch();
  const router: NextRouter = useRouter();

  useEffect(() => {
    dispatch(reAuthenticate(router));
  }, []);

  useEffect(() => {
    if (user._id) {
      dispatch(setNotes(router));
    }
  }, [user]);

  return (
    <div className={user.theme}>
      <div className="bg-[#FAFAFA] min-h-screen dark:bg-[#151515] transition-all duration-1000">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ThePreApplicationLayout;
