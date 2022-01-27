import type { NextPage } from "next";
import { TypedDispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import TheLayout from "layouts";
import MinimalLogo from "components/UI/MinimalLogo";
import SecondaryButton from "components/UI/SecondaryButton";
import BrandButton from "components/UI/BrandButton";
import Link from "next/link";
import { useState } from "react";
import { addNote } from "redux/notes/asyncActions";
import { IStore } from "redux";
import { NextRouter, useRouter } from "next/router";

const CreateNote: NextPage<IHomePageProps> = props => {
  const dispatch: TypedDispatch = useDispatch();
  const router: NextRouter = useRouter();
  const { user }: IStore = useSelector((store: IStore) => store);

  const [title, setTitle] = useState<string>("");

  async function add() {
    dispatch(addNote(title, user._id, router));
  }

  return (
    <TheLayout>
      <div className="h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center py-12"
        >
          <MinimalLogo />
        </motion.div>
        <div className="mt-36">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-semibold text-base text-[#3b3b3b] dark:text-[#565656]"
          >
            Add title:
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <input
              value={title}
              onChange={e => {
                setTitle(e.target.value);
              }}
              className="font-semibold w-full text-3xl lg:text-5xl outline-none border-none bg-transparent mt-4 placeholder-[#303030] dark:placeholder-[#959595] dark:text-[#e7e7e7]"
              type="text"
              placeholder="Enter title..."
            />
          </motion.div>
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-6 fixed w-full pr-10 lg:pr-10 lg:relative bottom-5">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <Link href="/">
                <a>
                  <SecondaryButton>Back</SecondaryButton>
                </a>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <BrandButton onClickHandler={add}>Add note</BrandButton>
            </motion.div>
          </div>
        </div>
      </div>
    </TheLayout>
  );
};

export default CreateNote;
