import React, { FunctionComponent } from "react";
import moment from "moment";
import { Link as Anchor } from "react-scroll";
import { NextRouter, useRouter } from "next/router";
import MotionOnView from "components/MotionOnView";

interface INoteCard {
  title?: string;
  text?: string;
  date?: string;
  id?: string;
}

const NoteCard: FunctionComponent<INoteCard> = ({ title = "", text = "", date = "", id = "1" }) => {
  const router: NextRouter = useRouter();

  function redirect() {
    router.push(`/note/${id}`);
  }

  return (
    <MotionOnView>
      <Anchor to="#header" smooth={true} duration={600}>
        <div onClick={redirect} className="cursor-pointer">
          <div className="border-2 border-[#EAEAEA] hover:border-[#d6d6d6] dark:border-[#2D2D2D] dark:hover:border-[#5f5f5f] w-full max-w-[164px] lg:max-w-[272px] h-[164px] lg:h-[272px] rounded-[21px] shadow-md hover:shadow-xl px-4 lg:px-6 py-4 lg:py-5 transition-all duration-1000">
            <div>
              <h2 className="font-medium text-sm lg:text-lg text-ellipsis overflow-hidden whitespace-nowrap text-[#242424] dark:text-[#D8D8D8] transition-all duration-1000">
                {title}
              </h2>
            </div>
            <div className="mt-2 lg:mt-3">
              <p className="text-[#878787] dark:text-[#A5A5A5] text-[10px] lg:text-sm min-h-[73px] max-h-[73px] lg:min-h-[140px] lg:max-h-[140px] overflow-hidden text-justify font-medium transition-all duration-1000">
                {text ? text : "The note contains nothing"}
              </p>
            </div>
            <div>
              <div className="text-[10px] lg:text-xs text-[#C5C5C5] dark:text-[#A5A5A5] font-semibold mt-3 lg:mt-6 transition-all duration-1000">
                {moment(date).format("DD/MM/YYYY")}
              </div>
            </div>
          </div>
        </div>
      </Anchor>
    </MotionOnView>
  );
};

export default NoteCard;
