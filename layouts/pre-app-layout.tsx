import React, { FunctionComponent, ReactNode, useEffect, useState } from "react";
import { NextRouter, useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "redux";
import { TypedDispatch } from "redux";
import { setNotes } from "redux/notes/asyncActions";
import { reAuthenticate } from "redux/user/asyncActions";
import LoadingModal from "components/Modals/Loading";

const ThePreApplicationLayout: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const dispatch: TypedDispatch = useDispatch();
  const router: NextRouter = useRouter();

  const { user }: IStore = useSelector((store: IStore) => store);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    dispatch(
      reAuthenticate(router, () => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      })
    );
  }, []);

  useEffect(() => {
    if (user._id) {
      dispatch(setNotes(router));
    }
  }, [user]);

  return (
    <div className={user.theme}>
      {!isLoading && (
        <div>
          <div className="bg-[#FAFAFA] min-h-screen dark:bg-[#151515] transition-all duration-1000">
            <div>{children}</div>
          </div>
        </div>
      )}
      {<LoadingModal isLoading={isLoading} />}
    </div>
  );
};

export default ThePreApplicationLayout;
