import type { NextPage } from "next";
import { IStore } from "redux";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center py-12"
        >
          <MinimalLogo />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Link href="/profile">
            <a>
              <div className="text-center text-[#242424] dark:text-[#E8E8E8] pb-14 text-lg">
                {user.firstName} {user.lastName}
              </div>
            </a>
          </Link>
        </motion.div>
        {notes.pinnedNotes.length ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="pb-6 lg:pb-12"
          >
            <div className="text-[#242424] dark:text-[#E8E8E8] text-sm font-medium">Pinned</div>
            <div className="grid grid-cols-2 gap-4 lg:gap-8 mt-3">
              {notes.pinnedNotes.map((note: INote, index) => {
                return <NoteCard title={note.title} text={note.text} id={note._id} date={note.updatedAt} key={index} />;
              })}
            </div>
          </motion.div>
        ) : (
          ""
        )}
        {notes.notes.length ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-0"
          >
            <div className="text-[#242424] dark:text-[#E8E8E8] text-sm font-medium">All</div>
            <div className="grid grid-cols-2 gap-3 lg:gap-8 mt-3">
              {notes.notes.map((note: INote, index) => {
                return <NoteCard title={note.title} text={note.text} id={note._id} date={note.updatedAt} key={index} />;
              })}
            </div>
          </motion.div>
        ) : (
          ""
        )}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center dark:text-[#E8E8E8]"
        >
          {notes.notes.length === 0 && notes.pinnedNotes.length === 0 ? "You don't have notes yet" : ""}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="fixed w-full left-0 px-5 bottom-5 lg:hidden"
        >
          <div className="shadow-2xl">
            <Link href="/add-note">
              <a>
                <BrandButton>Add Note</BrandButton>
              </a>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="flex flex-row justify-end h-28"
        >
          <div className="relative left-10">
            <div className="hidden lg:block fixed bottom-5">
              <AddCircleButton />
            </div>
          </div>
        </motion.div>
      </div>
    </TheLayout>
  );
};

export default Home;
