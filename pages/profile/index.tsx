import type { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IStore, TypedDispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { patchUser } from "redux/user/asyncActions";
import TheLayout from "layouts";
import Motion from "components/Motion";
import BrandButton from "components/UI/BrandButton";
import Input from "components/UI/Input";
import MinimalLogo from "components/UI/MinimalLogo";
import MoreButton from "components/UI/MoreButton";
import SecondaryButton from "components/UI/SecondaryButton";
import ThemeSwitch from "components/UI/ThemeSwitch";
import Link from "next/link";

const Profile: NextPage<IProfilePageProps> = props => {
  const router: NextRouter = useRouter();
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

  async function onSaveHandler() {
    dispatch(patchUser(email, password, name, lastName));
    router.push("/");
  }

  return (
    <TheLayout>
      <div className="flex flex-col items-center">
        <Motion delay={0}>
          <div className="py-12 hidden lg:block">
            <MinimalLogo />
          </div>
        </Motion>
        <Motion delay={1}>
          <div className="flex justify-between lg:justify-center w-full pb-9 pt-9 lg:pt-0 lg:pb-12">
            <div className="text-base lg:text-lg underline dark:text-[#E8E8E8] transition-all duration-1000">
              Personal Account Settings
            </div>
          </div>
        </Motion>
        <div className="w-full lg:w-96 flex flex-col gap-3">
          <Motion delay={2}>
            <Input value={name} setValue={setName} placeholder="Enter your name..." />
          </Motion>
          <Motion delay={3}>
            <Input value={lastName} setValue={setLastName} placeholder="Enter your last name..." />
          </Motion>
          <Motion delay={4}>
            <Input value={email} setValue={setEmail} placeholder="Enter your email..." />
          </Motion>
          <Motion delay={5}>
            <Input value={password} setValue={setPassword} placeholder="Enter your new password..." />
          </Motion>
          <Motion delay={6}>
            <div className="mt-1 lg:pb-0">
              <div className="text-sm dark:text-[#E8E8E8] transition-all duration-500">Theme</div>
              <div className="mt-3">
                <ThemeSwitch />
              </div>
            </div>
          </Motion>
          <div className="w-full px-0 pb-14">
            <div className="flex flex-col gap-3">
              <div className="mt-9">
                <Motion delay={7}>
                  <BrandButton onClickHandler={onSaveHandler}>Save</BrandButton>
                </Motion>
              </div>
              <Motion delay={8}>
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
              </Motion>
            </div>
          </div>
        </div>
      </div>
    </TheLayout>
  );
};

export default Profile;
