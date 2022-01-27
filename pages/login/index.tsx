import type { NextPage } from "next";
import { useState } from "react";
import { TypedDispatch } from "redux";
import { useDispatch } from "react-redux";
import { login } from "redux/user/asyncActions";
import { NextRouter, useRouter } from "next/router";
import { motion } from "framer-motion";
import TheLayout from "layouts";
import Link from "next/link";
import BrandButton from "components/UI/BrandButton";
import Input from "components/UI/Input";
import Logo from "components/UI/Logo";

const Login: NextPage = props => {
  const dispatch: TypedDispatch = useDispatch();
  const router: NextRouter = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function signIn() {
    dispatch(login(email, password, router));
  }

  return (
    <TheLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7 }}
        className="flex items-center justify-center py-6 lg:py-12"
      >
        <Logo />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-base lg:text-lg text-[#2F2F2F] dark:text-[#e2e2e2] text-justify"
      >
        "My Feels" is a service for writing notes about your well-being with a minimal user interface.
        <br />
        <br />
        Feel free to express your emotions to yourself, don't be ashamed of your feelings, don't be ashamed to be
        yourself and your feeling will always be fine, we believe in it.
        <br />
        <br />
        Don't have an account yet?{" "}
        <Link href="/create-an-account">
          <a>
            <span className="underline">Create an account</span>
          </a>
        </Link>
      </motion.div>
      <div className="mt-9 lg:mt-12 flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-center font-semibold text-lg lg:text-2xl text-[#2F2F2F] dark:text-[#E8E8E8]">Login</h2>
        </motion.div>
        <div className="w-full lg:w-96 mt-5 lg:mt-6 flex flex-col gap-4 lg:gap-5">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Input value={email} setValue={setEmail} placeholder="Enter email..." />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Input value={password} setValue={setPassword} placeholder="Enter password..." />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <BrandButton onClickHandler={signIn}>Login</BrandButton>
          </motion.div>
        </div>
      </div>
    </TheLayout>
  );
};

export default Login;
