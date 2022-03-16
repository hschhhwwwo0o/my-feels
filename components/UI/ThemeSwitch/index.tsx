import React, { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "redux";
import { TypedDispatch } from "redux";
import { changeTheme } from "redux/user/asyncActions";

const ThemeSwitch: FunctionComponent = () => {
  const { user }: IStore = useSelector((store: IStore) => store);
  const dispatch: TypedDispatch = useDispatch();

  async function onClickHandler(): Promise<void> {
    dispatch(changeTheme(user.theme === "dark" ? "light" : "dark"));
  }

  return (
    <div
      role={"button"}
      className="w-[196px] h-[36px] bg-[#F5F5F5] dark:bg-[#1A1A1A] rounded-lg flex items-center justify-center px-1 overflow-hidden font-semibold transition-all duration-1000"
      onClick={onClickHandler}
    >
      <div className="flex items-center justify-center w-full text-[13px]">
        <div className="w-full h-[30px] rounded-lg flex items-center justify-center bg-[#FAFAFA] dark:bg-[#1A1A1A] dark:text-[#F5F5F5] cursor-pointer shadow-md transition-all duration-1000">
          Light
        </div>
        <div className="w-full h-[30px] rounded-lg flex items-center justify-center cursor-pointer dark:bg-[#FAFAFA] transition-all duration-1000">
          Dark
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitch;
