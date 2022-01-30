import type { NextPage } from "next";
import { IStore, TypedDispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { NextRouter, useRouter } from "next/router";
import { pinNote, removeNote, saveNote } from "redux/notes/asyncActions";
import moment from "moment";
import TheLayout from "layouts";
import Link from "next/link";
import Motion from "components/Motion";
import BackButton from "components/UI/BackButton";
import Emojies from "components/Custom/Emojies";
import Thumbtack from "components/UI/Thumbtack";
import Textarea from "components/UI/Textarea";
import InputNoteTitleH2 from "components/UI/InputNoteTitleH2";
import TrashButton from "components/UI/TrashButton";

const Home: NextPage<IHomePageProps> = props => {
  const dispatch: TypedDispatch = useDispatch();
  const router: NextRouter = useRouter();

  const { notes }: IStore = useSelector((store: IStore) => store);

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

  async function onRemove() {
    dispatch(removeNote());
    router.push("/");
  }

  return (
    <TheLayout>
      <div className="h-full">
        <div className="h-16 shadow-sm dark:shadow-md w-full min-w-[100vw] -ml-5 lg:-ml-0 lg:min-w-[613px] flex flex-row justify-between items-center px-5 lg:px-[120px]">
          <Motion delay={0}>
            <div className="relative top-1">
              <Link href="/">
                <a>
                  <BackButton onClickHandler={onSave} />
                </a>
              </Link>
            </div>
          </Motion>
          <Motion delay={1}>
            <Thumbtack value={isPinned} onClickHandler={onPin} />
          </Motion>
          <Motion delay={2}>
            <Emojies value={emojies} setValue={setEmojies} />
          </Motion>
          <Motion delay={3}>
            <TrashButton onClickHandler={onRemove} />
          </Motion>
        </div>
        <div className="lg:px-16 lg:min-w-[613px]">
          <Motion delay={4}>
            <InputNoteTitleH2 value={title} setValue={setTitle} />
          </Motion>
          <Motion delay={5}>
            <Textarea value={text} setValue={setText} />
          </Motion>
          <Motion delay={6}>
            <div className="text-[#C5C5C5] dark:text-[#5B5B5B] fixed bottom-5 flex items-center justify-center w-full left-0 text-sm font-semibold">
              {moment(updatedAt).format("DD/MM/YYYY")}
            </div>
          </Motion>
        </div>
      </div>
    </TheLayout>
  );
};

export default Home;
