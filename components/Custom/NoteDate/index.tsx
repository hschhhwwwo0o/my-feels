import moment from "moment";
import React, { FunctionComponent } from "react";

const NoteDate: FunctionComponent<{ date: string }> = ({ date = "" }) => {
  return (
    <div className="text-[#C5C5C5] dark:text-[#5B5B5B] fixed bottom-5 flex items-center justify-center w-full left-0 text-[12px] font-semibold pointer-events-none">
      {moment(date).format("DD/MM/YYYY")}
    </div>
  );
};

export default NoteDate;
