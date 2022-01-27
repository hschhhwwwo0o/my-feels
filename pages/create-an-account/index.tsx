import type { NextPage } from "next";
import BrandButton from "components/UI/BrandButton";
import Input from "components/UI/Input";
import Logo from "components/UI/Logo";
import TheLayout from "layouts";
import { useState } from "react";
import { createAnAccount } from "redux/user/asyncActions";
import { NextRouter, useRouter } from "next/router";
import { TypedDispatch } from "redux";
import { useDispatch } from "react-redux";
import Link from "next/link";

const CreateAnAccount: NextPage = props => {
  const dispatch: TypedDispatch = useDispatch();
  const router: NextRouter = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function create() {
    dispatch(createAnAccount(email, password, router));
  }

  return (
    <TheLayout>
      <div className="flex items-center justify-center py-6 lg:py-12">
        <Logo />
      </div>
      <div className="text-base lg:text-lg text-[#2F2F2F] dark:text-[#e2e2e2] text-justify">
        “Archive is the publishing house behind the most inspiring books all around Europe.
        <br />
        <br />
        We designed the Archive website with some exciting features to give users an even better access to their goodies
        and we also made an improved mobile version.
        <br />
        <br />
        Already have an account?{" "}
        <Link href="/login">
          <a>
            <span className="underline">Sign in</span>
          </a>
        </Link>
      </div>
      <div className="mt-9 lg:mt-12 flex flex-col justify-center items-center">
        <h2 className="text-center font-semibold text-lg lg:text-2xl text-[#2F2F2F] dark:text-[#E8E8E8]">
          Create an account
        </h2>
        <div className="w-full lg:w-96 mt-5 lg:mt-6 flex flex-col gap-4 lg:gap-5">
          <Input value={email} setValue={setEmail} placeholder="Enter email..." />
          <Input value={password} setValue={setPassword} placeholder="Enter password..." type="password" />
          <BrandButton onClickHandler={create}>Create</BrandButton>
        </div>
      </div>
    </TheLayout>
  );
};

export default CreateAnAccount;
