import type { NextPage } from "next";
import { IStore, TypedDispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import TheLayout from "layouts";
import MinimalLogo from "components/UI/MinimalLogo";
import SecondaryButton from "components/UI/SecondaryButton";
import BrandButton from "components/UI/BrandButton";
import Link from "next/link";
import { logout } from "redux/user/asyncActions";
import { NextRouter, useRouter } from "next/router";

const More: NextPage<IProfilePageProps> = props => {
  const router: NextRouter = useRouter();
  const dispatch: TypedDispatch = useDispatch();
  const { user }: IStore = useSelector((store: IStore) => store);

  function remove() {
    dispatch(logout(router));
  }

  return (
    <TheLayout>
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="py-12"
        >
          <MinimalLogo />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[#242424] dark:text-[#E8E8E8] underline"
        >
          More
        </motion.div>
        <div className="mt-12 w-full">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="border-2 border-[#EAEAEA] dark:border-[#2D2D2D] w-full rounded-3xl px-5 pt-6 pb-4 lg:pb-6 shadow-md"
            >
              <div className="font-semibold text-lg text-[#242424] dark:text-[#ECECEC]">
                Dear {user.firstName} {user.lastName}
              </div>
              <div className="text-[#444444] dark:text-[#B2B2B2] mt-[14px] text-sm lg:text-base">
                I'm glad if you liked my app. Take care of yourself and don't be afraid to express your feelings! Our
                world is beautiful and I wish you all the best!
                <br />
                <br />
                Unfortunately, because I use a free Heroku server, sometimes the app can take a long time and the server
                can freeze, but if you like my app, please give it a star on GitHub.
                <br />
                <br />
                If you want to remove the account, please leave feedback so my app can get better.
                <br />
                <br />
                myfeels.feedback@gmail.com
              </div>
              <div className="lg:hidden mt-4">
                <BrandButton onClickHandler={remove}>Remove account</BrandButton>
              </div>
            </motion.div>
            <div className="mt-5 grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="hidden lg:block"
              >
                <Link href="/profile">
                  <a>
                    <SecondaryButton>Back</SecondaryButton>
                  </a>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="hidden lg:block"
              >
                <BrandButton onClickHandler={remove}>Remove account</BrandButton>
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="fixed lg:hidden w-full bottom-5 px-5"
        >
          <Link href="/profile">
            <a>
              <SecondaryButton>Back</SecondaryButton>
            </a>
          </Link>
        </motion.div>
      </div>
    </TheLayout>
  );
};

export default More;
