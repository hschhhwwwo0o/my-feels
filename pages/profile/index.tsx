import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { IStore, TypedDispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import TheLayout from "layouts";
import Link from "next/link";
import BrandButton from "components/UI/BrandButton";
import Input from "components/UI/Input";
import MinimalLogo from "components/UI/MinimalLogo";
import MoreButton from "components/UI/MoreButton";
import SecondaryButton from "components/UI/SecondaryButton";
import ThemeSwitch from "components/UI/ThemeSwitch";
import { patchUser } from "redux/user/asyncActions";

const Profile: NextPage<IProfilePageProps> = props => {
  const dispatch: TypedDispatch = useDispatch();
  const { user }: IStore = useSelector((store: IStore) => store);

  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    setName(user.firstName);
    setLastName(user.lastName);
    setEmail(user.email);
  }, [user]);

  async function onSave() {
    dispatch(patchUser(email, password, name, lastName));
  }

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
          <div className="text-base lg:text-lg underline dark:text-[#E8E8E8] transition-all duration-500">
            Personal Account Settings
          </div>
          <div className="opacity-0 lg:hidden">
            <MinimalLogo />
          </div>
        </div>
        <div className="w-full lg:w-96 flex flex-col gap-3">
          <Input value={name} setValue={setName} placeholder="Enter your name..." />
          <Input value={lastName} setValue={setLastName} placeholder="Enter your last name..." />
          <Input value={email} setValue={setEmail} placeholder="Enter your email..." />
          <Input value={password} setValue={setPassword} placeholder="Enter your new password..." />
          <div className="mt-1">
            <div className="text-sm dark:text-[#E8E8E8] transition-all duration-500">Theme</div>
            <div className="mt-3">
              <ThemeSwitch />
            </div>
          </div>
          <div className="w-full left-0 px-6 lg:px-0 fixed bottom-5 lg:w-full lg:relative lg:bottom-0">
            <div className="flex flex-col gap-3">
              <div className="mt-9">
                <div>
                  <BrandButton onClickHandler={onSave}>Save</BrandButton>
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <div className="w-full">
                  <Link href="/">
                    <a>
                      <SecondaryButton>Cancel</SecondaryButton>
                    </a>
                  </Link>
                </div>
                <Link href="/more">
                  <a>
                    <MoreButton />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TheLayout>
  );
};

export default Profile;
