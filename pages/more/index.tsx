import type { NextPage } from "next";
import { IStore, TypedDispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "redux/user/asyncActions";
import { NextRouter, useRouter } from "next/router";
import TheLayout from "layouts";
import Motion from "components/Motion";
import MinimalLogo from "components/UI/MinimalLogo";
import SecondaryButton from "components/UI/SecondaryButton";
import BrandButton from "components/UI/BrandButton";
import Link from "next/link";
import AboutCard from "components/Custom/AboutCard";
import PrivacyPolicyCard from "components/Custom/PrivacyPolicyCard";

const More: NextPage = props => {
  const router: NextRouter = useRouter();
  const dispatch: TypedDispatch = useDispatch();
  const { user }: IStore = useSelector((store: IStore) => store);

  async function onLogoutHandler(): Promise<void> {
    dispatch(logout(router));
  }

  return (
    <TheLayout>
      <div className="flex flex-col items-center w-full">
        <Motion delay={0}>
          <div className="py-12">
            <MinimalLogo />
          </div>
        </Motion>
        <Motion delay={1}>
          <div className="text-[#242424] dark:text-[#E8E8E8] underline">More</div>
        </Motion>
        <div className="mt-12 w-full pb-20">
          <div className="w-full">
            <Motion delay={2}>
              <AboutCard />
            </Motion>
            <Motion delay={3}>
              <PrivacyPolicyCard />
            </Motion>
            <Motion delay={4}>
              <div className="border-2 border-[#EAEAEA] dark:border-[#2D2D2D] w-full rounded-3xl px-5 pt-6 pb-6 shadow-md mt-6">
                <div className="font-semibold text-lg text-[#242424] dark:text-[#ECECEC]">
                  Dear {user.firstName} {user.lastName}
                </div>
                <div className="text-[#444444] dark:text-[#B2B2B2] mt-[14px] text-sm lg:text-base text-justify">
                  I'm glad if you liked my app. Take care of yourself and don't be afraid to express your feelings! Our
                  world is beautiful and I wish you all the best!
                  <br />
                  <br />
                  Unfortunately, because I use a free Heroku server, sometimes the app can take a long time and the
                  server can freeze, but if you like my app, please give it a star on GitHub.
                  <br />
                  <br />
                  If you want to remove the account, please leave feedback so my app can get better.
                  <br />
                  <br />
                  myfeels.feedback@gmail.com
                </div>
                <div className="lg:hidden mt-4">
                  <BrandButton onClickHandler={onLogoutHandler}>Remove account</BrandButton>
                </div>
              </div>
            </Motion>
            <div className="mt-5 grid grid-cols-2 gap-4">
              <Motion delay={5}>
                <div className="hidden lg:block">
                  <Link href="/profile">
                    <a>
                      <SecondaryButton>Back</SecondaryButton>
                    </a>
                  </Link>
                </div>
              </Motion>
              <Motion delay={6}>
                <div className="hidden lg:block">
                  <BrandButton onClickHandler={onLogoutHandler}>Remove account</BrandButton>
                </div>
              </Motion>
            </div>
          </div>
          <Motion delay={6}>
            <div className="lg:hidden w-full">
              <Link href="/profile">
                <a>
                  <SecondaryButton>Back</SecondaryButton>
                </a>
              </Link>
            </div>
          </Motion>
        </div>
      </div>
    </TheLayout>
  );
};

export default More;
