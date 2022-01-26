import type { NextPage } from "next";
import TheLayout from "layouts";
import MinimalLogo from "components/UI/MinimalLogo";
import NoteCard from "components/UI/NoteCard";

const Home: NextPage<IHomePageProps> = props => {
  return (
    <TheLayout>
      <div>
        <div className="flex items-center justify-center py-12">
          <MinimalLogo />
        </div>
        <div className="text-center text-[#242424] dark:text-[#E8E8E8] pb-14 text-lg">Saveliy Meetrofanov</div>
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
          </div>
        </div>
      </div>
    </TheLayout>
  );
};

export default Home;
