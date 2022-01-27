import type { NextPage } from "next";
import { IStore, TypedDispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { NextRouter, useRouter } from "next/router";
import { pinNote, saveNote } from "redux/notes/asyncActions";
import { motion } from "framer-motion";
import moment from "moment";
import Link from "next/link";
import TheLayout from "layouts";
import MinimalLogo from "components/UI/MinimalLogo";
import BackButton from "components/UI/BackButton";
import Emojies from "components/Custom/Emojies";
import Thumbtack from "components/UI/Thumbtack";

const Home: NextPage<IHomePageProps> = props => {
  const { notes }: IStore = useSelector((store: IStore) => store);
  const dispatch: TypedDispatch = useDispatch();
  const router: NextRouter = useRouter();

  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [isPinned, setIsPinned] = useState<boolean>(false);
  const [updatedAt, setUpdatedAt] = useState<string>("");
  const [emojies, setEmojies] = useState<string[]>([]);

  useEffect(() => {
    dispatch({
      type: "SET_CURRENT_NOTE",
      payload: {
        _id: router.query.id,
      },
    });
  }, []);

  useEffect(() => {
    setTitle(notes.currentNote.title);
    setText(notes.currentNote.text);
    setIsPinned(notes.currentNote.isPinned);
    setUpdatedAt(notes.currentNote.updatedAt);
    setEmojies(notes.currentNote.emojies);
  }, [notes.currentNote]);

  async function onSave() {
    dispatch(saveNote(title, text, isPinned, emojies));
  }

  async function onPin() {
    dispatch(pinNote(!isPinned));
    setIsPinned(!isPinned);
  }

  return (
    <TheLayout>
      <div className="h-full">
        <div className="h-16 shadow-sm dark:shadow-md w-full min-w-[100vw] -ml-5 lg:-ml-0 lg:min-w-[613px] flex flex-row justify-between items-center px-5 lg:px-[120px]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            onClick={onSave}
          >
            <MinimalLogo />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            onClick={onSave}
          >
            <Link href="/">
              <a>
                <BackButton />
              </a>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Emojies value={emojies} setValue={setEmojies} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Thumbtack value={isPinned} onClickHandler={onPin} />
          </motion.div>
        </div>
        <div className="lg:px-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <input
              value={title}
              onChange={e => {
                setTitle(e.target.value);
              }}
              type="text"
              className="text-lg lg:text-2xl bg-transparent font-semibold outline-none mt-6 text-[#242424] dark:text-[#ECECEC] placeholder-[#bebebe] dark:placeholder-[#545454]"
              placeholder="Enter Title"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <textarea
              value={text}
              onChange={e => {
                setText(e.target.value);
              }}
              className="mt-5 w-full bg-transparent font-medium text-[#444444] dark:text-[#B2B2B2] outline-none text-justify h-[1000px] placeholder-[#bebebe] dark:placeholder-[#545454]"
              placeholder="Enter text"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-[#C5C5C5] dark:text-[#5B5B5B] fixed bottom-5 flex items-center justify-center w-full left-0 text-sm font-semibold"
          >
            {moment(updatedAt).format("DD/MM/YYYY")}
          </motion.div>
        </div>
      </div>
    </TheLayout>
  );
};

export default Home;
