import type { NextPage } from "next";
import BrandButton from "components/UI/BrandButton";
import Input from "components/UI/Input";
import MinimalLogo from "components/UI/MinimalLogo";
import MoreButton from "components/UI/MoreButton";
import SecondaryButton from "components/UI/SecondaryButton";
import ThemeSwitch from "components/UI/ThemeSwitch";
import TheLayout from "layouts";

const Profile: NextPage<IProfilePageProps> = props => {
  return (
    <TheLayout>
      <div className="flex flex-col items-center">
        <div className="py-12 hidden lg:block">
          <MinimalLogo />
        </div>
        <div className="flex justify-between lg:justify-center w-full pb-9 pt-9 lg:pt-0 lg:pb-12">
          <div className="lg:hidden">
            <MinimalLogo />
          </div>
          <div className="text-base lg:text-lg underline">Personal Account Settings</div>
          <div className="opacity-0 lg:hidden">
            <MinimalLogo />
          </div>
        </div>
        <div className="w-full lg:w-96 flex flex-col gap-3">
          <Input />
          <Input />
          <Input />
          <Input />
          <div>
            <div className="text-sm">Theme</div>
            <div className="mt-3">
              <ThemeSwitch />
            </div>
          </div>
          <div className="w-full left-0 px-6 lg:px-0 fixed bottom-5 lg:w-full lg:relative lg:bottom-0">
            <div className="flex flex-col gap-3">
              <div className="mt-9">
                <div>
                  <BrandButton>Save</BrandButton>
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <div className="w-full">
                  <SecondaryButton>Cancel</SecondaryButton>
                </div>
                <MoreButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </TheLayout>
  );
};

export default Profile;
