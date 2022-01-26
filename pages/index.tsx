import type { NextPage } from "next";
import Link from "next/link";
import TheLayout from "layouts";
import MinimalLogo from "components/UI/MinimalLogo";
import NoteCard from "components/UI/NoteCard";
import BrandButton from "components/UI/BrandButton";
import AddCircleButton from "components/UI/AddCircleButton";

const Home: NextPage<IHomePageProps> = props => {
  return (
    <TheLayout>
      <div className="h-full">
        <div className="flex items-center justify-center py-12">
          <MinimalLogo />
        </div>
        <Link href="/profile">
          <a>
            <div className="text-center text-[#242424] dark:text-[#E8E8E8] pb-14 text-lg">Saveliy Meetrofanov</div>
          </a>
        </Link>
        <div>
          <div className="text-[#242424] dark:text-[#E8E8E8] text-sm font-medium">Pinned</div>
          <div className="grid grid-cols-2 gap-4 lg:gap-8 mt-3">
            <NoteCard />
          </div>
        </div>
        <div className="mt-12">
          <div className="text-[#242424] dark:text-[#E8E8E8] text-sm font-medium">All</div>
          <div className="grid grid-cols-2 gap-4 lg:gap-8 mt-3">
            <NoteCard />
            <NoteCard />
            <NoteCard />
          </div>
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
