import React, { FunctionComponent } from "react";
import Link from "next/link";

const MinimalLogo: FunctionComponent = () => {
  return (
    <Link href="/">
      <a role={"banner"}>
        <div className="cursor-pointer">
          <h1 className="text-lg dark:text-white transition-all duration-1000">
            <i>m</i>
            <span className="font-bold">f</span>
          </h1>
        </div>
      </a>
    </Link>
  );
};

export default MinimalLogo;
