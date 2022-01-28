import type { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IStore, TypedDispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { patchUser } from "redux/user/asyncActions";
import TheLayout from "layouts";
import { Link as Anchor } from "react-scroll";
import Motion from "components/Motion";
import BrandButton from "components/UI/BrandButton";
import Input from "components/UI/Input";
import MinimalLogo from "components/UI/MinimalLogo";
import MoreButton from "components/UI/MoreButton";
import SecondaryButton from "components/UI/SecondaryButton";
import ThemeSwitch from "components/UI/ThemeSwitch";

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

  async function onSave() {
    dispatch(patchUser(email, password, name, lastName));
    setTimeout(() => {
      router.push("/");
    }, 610);
  }

  function redirectToMore() {
    setTimeout(() => {
      router.push("/more");
    }, 610);
  }

  function cancel() {
    setTimeout(() => {
      router.push("/");
    }, 610);
  }

  return (
    <TheLayout>
      <div className="flex flex-col items-center">
        <Motion delay={0}>
          <div className="py-12 hidden lg:block">
            <MinimalLogo />
          </div>
        </Motion>
        <Motion delay={0.1}>
          <div className="flex justify-between lg:justify-center w-full pb-9 pt-9 lg:pt-0 lg:pb-12">
            <div className="text-base lg:text-lg underline dark:text-[#E8E8E8] transition-all duration-1000">
              Personal Account Settings
            </div>
          </div>
        </Motion>
        <div className="w-full lg:w-96 flex flex-col gap-3">
          <Motion delay={0.2}>
            <Input value={name} setValue={setName} placeholder="Enter your name..." />
          </Motion>
          <Motion delay={0.3}>
            <Input value={lastName} setValue={setLastName} placeholder="Enter your last name..." />
          </Motion>
          <Motion delay={0.4}>
            <Input value={email} setValue={setEmail} placeholder="Enter your email..." />
          </Motion>
          <Motion delay={0.5}>
            <Input value={password} setValue={setPassword} placeholder="Enter your new password..." />
          </Motion>
          <Motion delay={0.6}>
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
                <Motion delay={0.7}>
                  <Anchor to="#header" smooth={true} duration={600}>
                    <BrandButton onClickHandler={onSave}>Save</BrandButton>
                  </Anchor>
                </Motion>
              </div>
              <Motion delay={0.8}>
                <div className="flex flex-row gap-3">
                  <div className="w-full">
                    <Anchor to="#header" smooth={true} duration={600}>
                      <SecondaryButton onClickHandler={cancel}>Cancel</SecondaryButton>
                    </Anchor>
                  </div>
                  <Anchor to="#header" smooth={true} duration={600}>
                    <MoreButton onClickHandler={redirectToMore} />
                  </Anchor>
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
