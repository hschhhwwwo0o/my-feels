import type { NextPage } from "next";
import { TypedDispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addNote } from "redux/notes/asyncActions";
import { IStore } from "redux";
import { NextRouter, useRouter } from "next/router";
import TheLayout from "layouts";
import Link from "next/link";
import Motion from "components/Motion";
import MinimalLogo from "components/UI/MinimalLogo";
import SecondaryButton from "components/UI/SecondaryButton";
import BrandButton from "components/UI/BrandButton";
import Validate from "components/UI/Validate";

const CreateNote: NextPage = props => {
  const router: NextRouter = useRouter();
  const dispatch: TypedDispatch = useDispatch();
  const { user }: IStore = useSelector((store: IStore) => store);

  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");

  async function onAddNoteHandler(): Promise<void> {
    if (isClicked === false) {
      setIsClicked(true);
      dispatch(addNote(title, user._id, router));
    }
  }

  function validateTitle(): boolean {
    if (title.length) {
      return true;
    }
    return false;
  }

  return (
    <TheLayout>
      <div className="h-full min-h-screen flex flex-col justify-between lg:block pb-5">
        <Motion delay={0}>
          <div className="flex items-center justify-center py-12">
            <MinimalLogo />
          </div>
        </Motion>
        <div className="-mt-36 lg:mt-36">
          <Motion delay={1}>
            <div className="font-semibold text-base text-[#3b3b3b] dark:text-[#565656]">Add title:</div>
          </Motion>
          <Motion delay={2}>
            <input
              value={title}
              onChange={e => {
                setTitle(e.target.value);
              }}
              className="font-semibold w-full text-3xl lg:text-5xl outline-none border-none bg-transparent mt-4 placeholder-[#303030] dark:placeholder-[#959595] dark:text-[#e7e7e7]"
              type="text"
              placeholder="Enter title..."
            />
          </Motion>
          <div className="mt-20 grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-6 w-full lg:relative -top-5 hidden lg:grid">
            <Motion delay={3}>
              <Link href="/">
                <a>
                  <SecondaryButton>Back</SecondaryButton>
                </a>
              </Link>
            </Motion>
            <Motion delay={4}>
              <Validate isValidate={validateTitle()}>
                <BrandButton onClickHandler={onAddNoteHandler}>Add note</BrandButton>
              </Validate>
            </Motion>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-6 w-full lg:relative lg:hidden">
          <Motion delay={5}>
            <Link href="/">
              <a>
                <SecondaryButton>Back</SecondaryButton>
              </a>
            </Link>
          </Motion>
          <Motion delay={6}>
            <BrandButton onClickHandler={onAddNoteHandler}>Add note</BrandButton>
          </Motion>
        </div>
      </div>
    </TheLayout>
  );
};

export default CreateNote;
