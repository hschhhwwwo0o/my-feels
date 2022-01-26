import type { NextPage } from "next";
import TheLayout from "layouts";
import MinimalLogo from "components/UI/MinimalLogo";
import SecondaryButton from "components/UI/SecondaryButton";
import BrandButton from "components/UI/BrandButton";
import Link from "next/link";

const More: NextPage<IProfilePageProps> = props => {
  return (
    <TheLayout>
      <div className="flex flex-col items-center">
        <div className="py-12">
          <MinimalLogo />
        </div>
        <div className="text-[#242424] dark:text-[#E8E8E8] underline">More</div>
        <div className="mt-12 w-full">
          <div className="w-full">
            <div className="border-2 border-[#EAEAEA] dark:border-[#2D2D2D] w-full rounded-3xl px-5 pt-6 pb-4 lg:pb-6 shadow-md">
              <div className="font-semibold text-lg text-[#242424] dark:text-[#ECECEC]">Dear Saveliy Meetrofanov</div>
              <div className="text-[#444444] dark:text-[#B2B2B2] mt-[14px] text-sm lg:text-base">
                “Archive is the publishing house behind the most inspiring books all around Europe.
                <br />
                <br />
                We designed the Archive website with some exciting features to give users an even better access to their
                goodies and we also made an improved mobile version. We designed the Archive website with some exciting
                features to give users an even better access to their goodies and we also made an improved mobile
                version.
                <br />
                <br />
                books all around Europe.
              </div>
              <div className="lg:hidden mt-4">
                <BrandButton>Remove account</BrandButton>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="hidden lg:block">
                <Link href="/profile">
                  <a>
                    <SecondaryButton>Back</SecondaryButton>
                  </a>
                </Link>
              </div>
              <div className="hidden lg:block">
                <BrandButton>Remove account</BrandButton>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed lg:hidden w-full bottom-5 px-5">
          <Link href="/profile">
            <a>
              <SecondaryButton>Back</SecondaryButton>
            </a>
          </Link>
        </div>
      </div>
    </TheLayout>
  );
};

export default More;