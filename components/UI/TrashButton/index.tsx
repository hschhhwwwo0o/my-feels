import React, { FunctionComponent } from "react";

interface ITrashButton {
  onClickHandler?: () => any;
}

const TrashButton: FunctionComponent<ITrashButton> = ({ onClickHandler = () => {} }) => {
  return (
    <div>
      <button className="relative top-[1px] -left-[10px]" onClick={onClickHandler}>
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_55_140)">
            <path
              d="M14.8748 2.83333H12.679C12.5146 2.03392 12.0796 1.31562 11.4474 0.799508C10.8152 0.283397 10.0243 0.00103029 9.20817 0L7.79151 0C6.97536 0.00103029 6.18452 0.283397 5.55229 0.799508C4.92005 1.31562 4.48507 2.03392 4.32067 2.83333H2.12484C1.93698 2.83333 1.75681 2.90796 1.62397 3.0408C1.49113 3.17364 1.4165 3.3538 1.4165 3.54167C1.4165 3.72953 1.49113 3.90969 1.62397 4.04253C1.75681 4.17537 1.93698 4.25 2.12484 4.25H2.83317V13.4583C2.8343 14.3973 3.2078 15.2975 3.87174 15.9614C4.53569 16.6254 5.43588 16.9989 6.37484 17H10.6248C11.5638 16.9989 12.464 16.6254 13.1279 15.9614C13.7919 15.2975 14.1654 14.3973 14.1665 13.4583V4.25H14.8748C15.0627 4.25 15.2429 4.17537 15.3757 4.04253C15.5086 3.90969 15.5832 3.72953 15.5832 3.54167C15.5832 3.3538 15.5086 3.17364 15.3757 3.0408C15.2429 2.90796 15.0627 2.83333 14.8748 2.83333V2.83333ZM7.79151 1.41667H9.20817C9.64754 1.4172 10.076 1.55364 10.4347 1.80727C10.7935 2.0609 11.065 2.41931 11.2121 2.83333H5.78763C5.93467 2.41931 6.20619 2.0609 6.56495 1.80727C6.92371 1.55364 7.35215 1.4172 7.79151 1.41667V1.41667ZM12.7498 13.4583C12.7498 14.0219 12.526 14.5624 12.1274 14.9609C11.7289 15.3594 11.1884 15.5833 10.6248 15.5833H6.37484C5.81125 15.5833 5.27075 15.3594 4.87224 14.9609C4.47372 14.5624 4.24984 14.0219 4.24984 13.4583V4.25H12.7498V13.4583Z"
              className="fill-[#222222] dark:fill-[#d3d3d3]"
            />
            <path
              d="M7.08333 12.7497C7.27119 12.7497 7.45136 12.675 7.5842 12.5422C7.71704 12.4094 7.79166 12.2292 7.79166 12.0413V7.79134C7.79166 7.60348 7.71704 7.42331 7.5842 7.29047C7.45136 7.15764 7.27119 7.08301 7.08333 7.08301C6.89547 7.08301 6.7153 7.15764 6.58247 7.29047C6.44963 7.42331 6.375 7.60348 6.375 7.79134V12.0413C6.375 12.2292 6.44963 12.4094 6.58247 12.5422C6.7153 12.675 6.89547 12.7497 7.08333 12.7497Z"
              className="fill-[#222222] dark:fill-[#d3d3d3]"
            />
            <path
              d="M9.91683 12.7497C10.1047 12.7497 10.2849 12.675 10.4177 12.5422C10.5505 12.4094 10.6252 12.2292 10.6252 12.0413V7.79134C10.6252 7.60348 10.5505 7.42331 10.4177 7.29047C10.2849 7.15764 10.1047 7.08301 9.91683 7.08301C9.72897 7.08301 9.5488 7.15764 9.41596 7.29047C9.28312 7.42331 9.2085 7.60348 9.2085 7.79134V12.0413C9.2085 12.2292 9.28312 12.4094 9.41596 12.5422C9.5488 12.675 9.72897 12.7497 9.91683 12.7497Z"
              className="fill-[#222222] dark:fill-[#d3d3d3]"
            />
          </g>
          <defs>
            <clipPath id="clip0_55_140">
              <rect width="17" height="17" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
};

export default TrashButton;
