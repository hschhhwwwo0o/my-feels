import type { NextPage } from "next";
import { useState } from "react";
import { createAnAccount } from "redux/user/asyncActions";
import { NextRouter, useRouter } from "next/router";
import { TypedDispatch } from "redux";
import { useDispatch } from "react-redux";
import TheLayout from "layouts";
import Link from "next/link";
import Motion from "components/Motion";
import BrandButton from "components/UI/BrandButton";
import Input from "components/UI/Input";
import Logo from "components/UI/Logo";
import Error from "components/UI/Error";

const CreateAnAccount: NextPage = props => {
  const dispatch: TypedDispatch = useDispatch();
  const router: NextRouter = useRouter();

  const [apiError, setApiError] = useState("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function create() {
    function _errorCallback() {
      setApiError("Something went wrong. Make sure the data you entered is correct.");
    }
    dispatch(createAnAccount(email, password, router, _errorCallback));
  }

  return (
    <TheLayout>
      <Motion delay={0}>
        <div className="flex items-center justify-center py-6 lg:py-12">
          <Logo />
        </div>
      </Motion>
      <Motion delay={1}>
        <div className="text-base lg:text-lg text-[#2F2F2F] dark:text-[#e2e2e2] text-justify">
          "My Feels" is a service for writing notes about your well-being with a minimal user interface.
          <br />
          <br />
          Feel free to express your emotions to yourself, don't be ashamed of your feelings, don't be ashamed to be
          yourself and your feeling will always be fine, we believe in it.
          <br />
          <br />
          Already have an account?{" "}
          <Link href="/login">
            <a>
              <span className="underline">Sign in</span>
            </a>
          </Link>
        </div>
      </Motion>
      <div className="mt-9 lg:mt-12 flex flex-col justify-center items-center">
        <Motion delay={2}>
          <h2 className="text-center font-semibold text-lg lg:text-2xl text-[#2F2F2F] dark:text-[#E8E8E8]">
            Create an account
          </h2>
        </Motion>
        <div className="w-full lg:w-96 mt-5 lg:mt-6 flex flex-col gap-4 lg:gap-5 pb-24">
          <Motion delay={3}>
            <Input value={email} setValue={setEmail} placeholder="Enter email..." />
          </Motion>
          <Motion delay={4}>
            <Input value={password} setValue={setPassword} placeholder="Enter password..." type="password" />
          </Motion>
          <Motion delay={5}>
            <BrandButton onClickHandler={create}>Create</BrandButton>
          </Motion>
          <Error text={apiError} setError={setApiError} dependencies={[email, password]} />
        </div>
      </div>
    </TheLayout>
  );
};

export default CreateAnAccount;
