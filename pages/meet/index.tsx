import type { NextPage } from "next";
import BrandButton from "components/UI/BrandButton";
import Input from "components/UI/Input";
import Logo from "components/UI/Logo";
import ThemeSwitch from "components/UI/ThemeSwitch";
import TheLayout from "layouts";

const Meet: NextPage = props => {
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
          <Input />
          <Input />
          <div className="mt-1">
            <div className="text-sm dark:text-[#E8E8E8] transition-all duration-500">Theme</div>
            <div className="mt-3">
              <ThemeSwitch />
            </div>
          </div>
          <BrandButton>Continue</BrandButton>
        </div>
      </div>
    </TheLayout>
  );
};

export default Meet;
