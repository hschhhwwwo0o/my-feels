import type { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import { useState } from "react";
import { TypedDispatch } from "redux";
import { useDispatch } from "react-redux";
import { meetUser } from "redux/user/asyncActions";
import TheLayout from "layouts";
import Motion from "components/Motion";
import BrandButton from "components/UI/BrandButton";
import Input from "components/UI/Input";
import Logo from "components/UI/Logo";
import ThemeSwitch from "components/UI/ThemeSwitch";
import Validate from "components/UI/Validate";

const Meet: NextPage = props => {
  const dispatch: TypedDispatch = useDispatch();
  const router: NextRouter = useRouter();

  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  async function onMeetUserHandler(): Promise<void> {
    dispatch(meetUser(name, lastName));
    router.push("/");
  }

  function validateName() {
    if (name.length && lastName.length) {
      return true;
    }
    return false;
  }

  return (
    <TheLayout>
      <Motion delay={0}>
        <div className="flex items-center justify-center py-6 lg:py-12">
          <Logo />
        </div>
      </Motion>
      <Motion delay={1}>
        <div className="text-base lg:text-lg text-[#2F2F2F] dark:text-[#e2e2e2] text-justify transition-all duration-700">
          “Archive is the publishing house behind the most inspiring boo
        </div>
      </Motion>
      <div className="mt-9 lg:mt-12 flex flex-col justify-center items-center">
        <Motion delay={2}>
          <h2 className="text-center font-semibold text-lg lg:text-2xl text-[#2F2F2F] dark:text-[#E8E8E8] transition-all duration-700">
            Let's get acquainted
          </h2>
        </Motion>
        <div className="w-full lg:w-96 mt-5 lg:mt-6 flex flex-col gap-4 lg:gap-5">
          <Motion delay={3}>
            <Input value={name} setValue={setName} placeholder="Enter your name..." />
          </Motion>
          <Motion delay={4}>
            <Input value={lastName} setValue={setLastName} placeholder="Enter your last name" />
          </Motion>
          <Motion delay={5}>
            <div className="mt-1">
              <div className="text-sm dark:text-[#E8E8E8] transition-all duration-500">Theme</div>
              <div className="mt-3">
                <ThemeSwitch />
              </div>
            </div>
          </Motion>
          <Motion delay={6}>
            <Validate isValidate={validateName()}>
              <BrandButton onClickHandler={onMeetUserHandler}>Continue</BrandButton>
            </Validate>
          </Motion>
        </div>
      </div>
    </TheLayout>
  );
};

export default Meet;
