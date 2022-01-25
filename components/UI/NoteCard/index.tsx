import React, { FunctionComponent } from "react";

const NoteCard: FunctionComponent = () => {
  return (
    <>
      <div>
        <div className="border-2 border-[#EAEAEA] dark:border-[#2D2D2D] w-full max-w-[262px] h-[262px] rounded-[21px] shadow-md px-6 py-5">
          <div>
            <h2 className="font-medium text-lg text-ellipsis overflow-hidden whitespace-nowrap text-[#242424] dark:text-[#D8D8D8]">
              My Diary Note
            </h2>
          </div>
          <div className="mt-3">
            <p className="text-[#878787] dark:text-[#A5A5A5] text-sm max-h-[140px] overflow-hidden text-justify font-medium">
              “Archive is the publishing house behind the most inspiring books all around Europe. We designed the
              Archive website with some exciting features to give users an even better access to their goodies and we
              also made an improved mobile version.
            </p>
          </div>
          <div>
            <div className="text-xs text-[#C5C5C5] dark:text-[#A5A5A5] font-semibold mt-6">12/02/2022</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteCard;
