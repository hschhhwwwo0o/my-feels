import React, { FunctionComponent } from "react";
import Link from "next/link";

const AddCircleButton: FunctionComponent = () => {
  return (
    <Link href="/add-note">
      <div>
        <button className="flex items-center justify-center rounded-full shadow-md hover:shadow-xl h-[43px] transition-all duration-500 transform w-[43px] border-2 border-[#202020] bg-[#151515] hover:border-[#888888]">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M0.75 8.25H8.25V0.75C8.25 0.551088 8.32902 0.360322 8.46967 0.21967C8.61032 0.0790176 8.80109 0 9 0V0C9.19891 0 9.38968 0.0790176 9.53033 0.21967C9.67098 0.360322 9.75 0.551088 9.75 0.75V8.25H17.25C17.4489 8.25 17.6397 8.32902 17.7803 8.46967C17.921 8.61032 18 8.80109 18 9V9C18 9.19891 17.921 9.38968 17.7803 9.53033C17.6397 9.67098 17.4489 9.75 17.25 9.75H9.75V17.25C9.75 17.4489 9.67098 17.6397 9.53033 17.7803C9.38968 17.921 9.19891 18 9 18C8.80109 18 8.61032 17.921 8.46967 17.7803C8.32902 17.6397 8.25 17.4489 8.25 17.25V9.75H0.75C0.551088 9.75 0.360322 9.67098 0.219669 9.53033C0.0790171 9.38968 0 9.19891 0 9C0 8.80109 0.0790171 8.61032 0.219669 8.46967C0.360322 8.32902 0.551088 8.25 0.75 8.25Z"
              fill="#fafafa"
            />
          </svg>
        </button>
      </div>
    </Link>
  );
};

export default AddCircleButton;
