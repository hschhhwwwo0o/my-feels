import React, { FunctionComponent } from "react";
import Link from "next/link";

interface INoteCard {
  title?: string;
  text?: string;
  date?: string;
  id?: string;
}

const NoteCard: FunctionComponent<INoteCard> = ({ title = "", text = "", date = "", id = "1" }) => {
  return (
    <Link href={`/note/${id}`}>
      <a>
        <div className="cursor-pointer">
          <div className="border-2 border-[#EAEAEA] dark:border-[#2D2D2D] w-full max-w-[164px] lg:max-w-[272px] h-[164px] lg:h-[272px] rounded-[21px] shadow-md px-4 lg:px-6 py-4 lg:py-5">
            <div>
              <h2 className="font-medium text-sm lg:text-lg text-ellipsis overflow-hidden whitespace-nowrap text-[#242424] dark:text-[#D8D8D8]">
                {title}
              </h2>
            </div>
            <div className="mt-2 lg:mt-3">
              <p className="text-[#878787] dark:text-[#A5A5A5] text-[10px] lg:text-sm min-h-[73px] max-h-[73px] lg:min-h-[140px] lg:max-h-[140px] overflow-hidden text-justify font-medium">
                {text ? text : "The note contains nothing"}
              </p>
            </div>
            <div>
              <div className="text-[10px] lg:text-xs text-[#C5C5C5] dark:text-[#A5A5A5] font-semibold mt-3 lg:mt-6">
                12/02/2022
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default NoteCard;
