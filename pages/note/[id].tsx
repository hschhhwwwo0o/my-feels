import type { NextPage } from "next";
import Link from "next/link";
import TheLayout from "layouts";
import MinimalLogo from "components/UI/MinimalLogo";
import BackButton from "components/UI/BackButton";
import Emojies from "components/Custom/Emojies";
import Thumbtack from "components/UI/Thumbtack";
import { IStore, TypedDispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { NextRouter, useRouter } from "next/router";
import { saveNote } from "redux/notes/asyncActions";

const Home: NextPage<IHomePageProps> = props => {
  const { notes }: IStore = useSelector((store: IStore) => store);
  const dispatch: TypedDispatch = useDispatch();
  const router: NextRouter = useRouter();

  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [isPinned, setIsPinned] = useState<boolean>(false);

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
  }, [notes.currentNote]);

  async function onSave() {
    dispatch(saveNote(title, text, isPinned));
  }

  return (
    <TheLayout>
      <div className="h-full">
        <div className="h-16 shadow-sm dark:shadow-md w-full min-w-[100vw] -ml-5 lg:-ml-0 lg:min-w-[613px] flex flex-row justify-between items-center px-5 lg:px-[120px]">
          <div onClick={onSave}>
            <MinimalLogo />
          </div>
          <div onClick={onSave}>
            <Link href="/">
              <a>
                <BackButton />
              </a>
            </Link>
          </div>
          <Emojies />
          <Thumbtack
            value={isPinned}
            onClickHandler={() => {
              setIsPinned(!isPinned);
            }}
          />
        </div>
        <div className="lg:px-16">
          <input
            value={title}
            onChange={e => {
              setTitle(e.target.value);
            }}
            type="text"
            className="text-lg lg:text-2xl bg-transparent font-semibold outline-none mt-6 text-[#242424] dark:text-[#ECECEC] placeholder-[#bebebe] dark:placeholder-[#545454]"
            placeholder="Enter Title"
          />
          <textarea
            value={text}
            onChange={e => {
              setText(e.target.value);
            }}
            className="mt-5 w-full bg-transparent font-medium text-[#444444] dark:text-[#B2B2B2] outline-none text-justify h-[1000px] placeholder-[#bebebe] dark:placeholder-[#545454]"
            placeholder="Enter text"
          ></textarea>
          <div className="text-[#C5C5C5] dark:text-[#5B5B5B] fixed bottom-5 flex items-center justify-center w-full left-0 text-sm font-semibold">
            12/02/2022
          </div>
        </div>
      </div>
    </TheLayout>
  );
};

export default Home;
