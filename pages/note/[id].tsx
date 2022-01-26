import type { NextPage } from "next";
import TheLayout from "layouts";
import MinimalLogo from "components/UI/MinimalLogo";
import BackButton from "components/UI/BackButton";
import Emojies from "components/Custom/Emojies";
import Thumbtack from "components/UI/Thumbtack";

const Home: NextPage<IHomePageProps> = props => {
  return (
    <TheLayout>
      <div className="h-full">
        <div className="h-16 shadow-sm dark:shadow-md w-full min-w-[100vw] -ml-5 lg:-ml-0 lg:min-w-[613px] flex flex-row justify-between items-center px-5 lg:px-[120px]">
          <MinimalLogo />
          <BackButton />
          <Emojies />
          <Thumbtack />
        </div>
        <div className="lg:px-16">
          <input
            type="text"
            className="text-lg lg:text-2xl bg-transparent outline-none mt-6 text-[#242424] dark:text-[#ECECEC]"
            placeholder="Enter Title"
          />
          <textarea
            className="mt-5 w-full bg-transparent text-[#444444] dark:text-[#B2B2B2] outline-none text-justify h-[1000px]"
            placeholder="Enter text"
            name=""
            id=""
          ></textarea>
        </div>
      </div>
    </TheLayout>
  );
};

export default Home;
