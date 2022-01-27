import type { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IStore, TypedDispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
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
    router.push("/");
  }

  return (
    <TheLayout>
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="py-12 hidden lg:block"
        >
          <MinimalLogo />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-between lg:justify-center w-full pb-9 pt-9 lg:pt-0 lg:pb-12"
        >
          <div className="lg:hidden">
            <MinimalLogo />
          </div>
          <div className="text-base lg:text-lg underline dark:text-[#E8E8E8] transition-all duration-1000">
            Personal Account Settings
          </div>
          <div className="opacity-0 lg:hidden">
            <MinimalLogo />
          </div>
        </motion.div>
        <div className="w-full lg:w-96 flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Input value={name} setValue={setName} placeholder="Enter your name..." />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Input value={lastName} setValue={setLastName} placeholder="Enter your last name..." />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Input value={email} setValue={setEmail} placeholder="Enter your email..." />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Input value={password} setValue={setPassword} placeholder="Enter your new password..." />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-1 pb-64 lg:pb-0"
          >
            <div className="text-sm dark:text-[#E8E8E8] transition-all duration-500">Theme</div>
            <div className="mt-3">
              <ThemeSwitch />
            </div>
          </motion.div>
          <div className="w-full left-0 px-6 lg:px-0 fixed bottom-5 lg:w-full lg:relative lg:bottom-0">
            <div className="flex flex-col gap-3">
              <div className="mt-9">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, delay: 0.7 }}
                >
                  <BrandButton onClickHandler={onSave}>Save</BrandButton>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, delay: 0.9 }}
                className="flex flex-row gap-3"
              >
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
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </TheLayout>
  );
};

export default Profile;
