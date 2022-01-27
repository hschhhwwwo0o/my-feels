import type { NextPage } from "next";
import { IStore } from "redux";
import { useSelector } from "react-redux";
import TheLayout from "layouts";
import Link from "next/link";
import MinimalLogo from "components/UI/MinimalLogo";
import NoteCard from "components/UI/NoteCard";
import BrandButton from "components/UI/BrandButton";
import AddCircleButton from "components/UI/AddCircleButton";

const Home: NextPage<IHomePageProps> = props => {
  const { notes, user }: IStore = useSelector((store: IStore) => store);

  return (
    <TheLayout>
      <div className="h-full">
        <div className="flex items-center justify-center py-12">
          <MinimalLogo />
        </div>
        <Link href="/profile">
          <a>
            <div className="text-center text-[#242424] dark:text-[#E8E8E8] pb-14 text-lg">
              {user.firstName} {user.lastName}
            </div>
          </a>
        </Link>
        {notes.pinnedNotes.length ? (
          <div className="pb-6 lg:pb-12">
            <div className="text-[#242424] dark:text-[#E8E8E8] text-sm font-medium">Pinned</div>
            <div className="grid grid-cols-2 gap-4 lg:gap-8 mt-3">
              {notes.pinnedNotes.map((note: INote, index) => {
                return <NoteCard title={note.title} text={note.text} id={note._id} key={index} />;
              })}
            </div>
          </div>
        ) : (
          ""
        )}
        {notes.notes.length ? (
          <div className="mt-0">
            <div className="text-[#242424] dark:text-[#E8E8E8] text-sm font-medium">All</div>
            <div className="grid grid-cols-2 gap-3 lg:gap-8 mt-3">
              {notes.notes.map((note: INote, index) => {
                return <NoteCard title={note.title} text={note.text} id={note._id} key={index} />;
              })}
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="text-center dark:text-[#E8E8E8]">
          {notes.notes.length === 0 && notes.pinnedNotes.length === 0 ? "You don't have notes yet" : ""}
        </div>
        <div className="fixed w-full left-0 px-5 bottom-5 lg:hidden">
          <div className="shadow-2xl">
            <Link href="/add-note">
              <a>
                <BrandButton>Add Note</BrandButton>
              </a>
            </Link>
          </div>
        </div>
        <div className="flex flex-row justify-end h-28">
          <div className="relative left-10">
            <div className="hidden lg:block fixed bottom-5">
              <AddCircleButton />
            </div>
          </div>
        </div>
      </div>
    </TheLayout>
  );
};

export default Home;
