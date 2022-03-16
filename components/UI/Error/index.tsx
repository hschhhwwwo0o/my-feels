import React, { Dispatch, FunctionComponent, SetStateAction, useEffect } from "react";

const Error: FunctionComponent<{ text: string; setError: Dispatch<SetStateAction<string>>; dependencies: any[] }> = ({
  text,
  dependencies,
  setError,
}) => {
  useEffect(() => {
    setError("");
  }, dependencies);

  return (
    <>
      <div role="alert" className="text-red-500 text-sm">
        {text}
      </div>
    </>
  );
};

export default Error;
