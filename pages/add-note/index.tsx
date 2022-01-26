import type { NextPage } from "next";
import TheLayout from "layouts";
import MinimalLogo from "components/UI/MinimalLogo";
import SecondaryButton from "components/UI/SecondaryButton";
import BrandButton from "components/UI/BrandButton";
import Link from "next/link";

const Home: NextPage<IHomePageProps> = props => {
  return (
    <TheLayout>
      <div className="h-full">
        <div className="flex items-center justify-center py-12">
          <MinimalLogo />
        </div>
        <div className="mt-36">
          <div className="font-semibold text-base text-[#3b3b3b] dark:text-[#565656]">Add title:</div>
          <input
            className="font-semibold w-full text-3xl lg:text-5xl outline-none border-none bg-transparent mt-4 placeholder-[#303030] dark:placeholder-[#959595] dark:text-[#c0c0c0]"
            type="text"
            placeholder="Enter title..."
          />
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-6 fixed w-full pr-10 lg:pr-10 lg:relative bottom-5">
            <Link href="/">
              <a>
                <SecondaryButton>Back</SecondaryButton>
              </a>
            </Link>
            <BrandButton>Add note</BrandButton>
          </div>
        </div>
      </div>
    </TheLayout>
  );
};

export default Home;
