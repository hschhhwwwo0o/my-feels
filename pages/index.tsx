import type { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import { IStore } from "redux";
import { useSelector } from "react-redux";
import TheLayout from "layouts";
import Motion from "components/Motion";
import Link from "next/link";
import MinimalLogo from "components/UI/MinimalLogo";
import NoteCard from "components/UI/NoteCard";
import BrandButton from "components/UI/BrandButton";
import AddCircleButton from "components/UI/AddCircleButton";

const Home: NextPage<IHomePageProps> = props => {
  const router: NextRouter = useRouter();
  const { notes, user }: IStore = useSelector((store: IStore) => store);

  function redirectToAddNote() {
    router.push(`/add-note`);
  }

  return (
    <TheLayout>
      <div className="h-full">
        <Motion delay={0}>
          <div className="flex items-center justify-center py-12">
            <MinimalLogo />
          </div>
        </Motion>
        <Motion delay={1}>
          <Link href="/profile">
            <a>
              <div className="text-center text-[#242424] dark:text-[#E8E8E8] pb-14 text-lg">
                {user.firstName} {user.lastName}
              </div>
            </a>
          </Link>
        </Motion>
        {notes.pinnedNotes.length ? (
          <Motion delay={2}>
            <div className="pb-6 lg:pb-12">
              <div className="text-[#242424] dark:text-[#E8E8E8] text-sm font-medium">Pinned</div>
              <div className="grid grid-cols-2 gap-4 lg:gap-8 mt-3">
                {notes.pinnedNotes.map((note: INote, index) => {
                  return (
                    <NoteCard title={note.title} text={note.text} id={note._id} date={note.updatedAt} key={index} />
                  );
                })}
              </div>
            </div>
          </Motion>
        ) : (
          ""
        )}
        {notes.notes.length ? (
          <Motion delay={3}>
            <div className="mt-0">
              <div className="text-[#242424] dark:text-[#E8E8E8] text-sm font-medium">All</div>
              <div className="grid grid-cols-2 gap-3 lg:gap-8 mt-3">
                {notes.notes.map((note: INote, index) => {
                  return (
                    <NoteCard title={note.title} text={note.text} id={note._id} date={note.updatedAt} key={index} />
                  );
                })}
              </div>
            </div>
          </Motion>
        ) : (
          ""
        )}
        <Motion delay={4}>
          <div className="text-center dark:text-[#E8E8E8]">
            {notes.notes.length === 0 && notes.pinnedNotes.length === 0 ? "You don't have notes yet" : ""}
          </div>
        </Motion>
        <Motion delay={5}>
          <div className="fixed w-full left-0 px-5 bottom-5 lg:hidden">
            <div className="shadow-2xl">
              <BrandButton onClickHandler={redirectToAddNote}>Add Note</BrandButton>
            </div>
          </div>
        </Motion>
        <Motion delay={6}>
          <div className="flex flex-row justify-end h-28">
            <div className="relative left-10">
              <div className="hidden lg:block fixed bottom-5">
                <AddCircleButton />
              </div>
            </div>
          </div>
        </Motion>
      </div>
    </TheLayout>
  );
};

export default Home;
