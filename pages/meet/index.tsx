import type { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import { useState } from "react";
import { TypedDispatch } from "redux";
import { useDispatch } from "react-redux";
import { meetUser } from "redux/user/asyncActions";
import TheLayout from "layouts";
import BrandButton from "components/UI/BrandButton";
import Input from "components/UI/Input";
import Logo from "components/UI/Logo";
import ThemeSwitch from "components/UI/ThemeSwitch";

const Meet: NextPage = props => {
  const dispatch: TypedDispatch = useDispatch();
  const router: NextRouter = useRouter();

  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  async function meet() {
    dispatch(meetUser(name, lastName));
    router.push("/");
  }

  return (
    <TheLayout>
      <div className="flex items-center justify-center py-6 lg:py-12">
        <Logo />
      </div>
      <div className="text-base lg:text-lg text-[#2F2F2F] dark:text-[#e2e2e2] text-justify transition-all duration-700">
        “Archive is the publishing house behind the most inspiring books all around Europe.
      </div>
      <div className="mt-9 lg:mt-12 flex flex-col justify-center items-center">
        <h2 className="text-center font-semibold text-lg lg:text-2xl text-[#2F2F2F] dark:text-[#E8E8E8] transition-all duration-700">
          Let's get acquainted
        </h2>
        <div className="w-full lg:w-96 mt-5 lg:mt-6 flex flex-col gap-4 lg:gap-5">
          <Input value={name} setValue={setName} placeholder="Enter your name..." />
          <Input value={lastName} setValue={setLastName} placeholder="Enter your last name" />
          <div className="mt-1">
            <div className="text-sm dark:text-[#E8E8E8] transition-all duration-500">Theme</div>
            <div className="mt-3">
              <ThemeSwitch />
            </div>
          </div>
          <BrandButton onClickHandler={meet}>Continue</BrandButton>
        </div>
      </div>
    </TheLayout>
  );
};

export default Meet;
