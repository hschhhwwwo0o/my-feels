import React, { FunctionComponent } from "react";

interface IThumbtack {
  value?: boolean;
  onClickHandler?: () => any;
}

const Thumbtack: FunctionComponent<IThumbtack> = ({ value, onClickHandler = () => {} }) => {
  return (
    <>
      <div onClick={onClickHandler}>
        {value ? (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_50_112)">
              <path
                d="M15.5159 4.49539L11.5519 0.533384C11.2714 0.243209 10.8978 0.0609053 10.4965 0.0183713C10.0951 -0.0241627 9.69163 0.0757817 9.35655 0.300717C9.159 0.441209 8.99447 0.623106 8.87444 0.833721C8.75441 1.04434 8.68177 1.2786 8.66159 1.52018C8.64141 1.76175 8.67416 2.00482 8.75758 2.23243C8.84099 2.46005 8.97305 2.66672 9.14455 2.83805L9.53922 3.23205C9.63977 3.33323 9.69621 3.47007 9.69621 3.61272C9.69621 3.75536 9.63977 3.89221 9.53922 3.99339L8.13922 5.39339C8.01636 5.51571 7.86391 5.60414 7.69673 5.65005C7.52955 5.69596 7.35332 5.6978 7.18522 5.65539L6.63855 5.51539C6.00814 5.35083 5.3532 5.30137 4.70522 5.36939C4.27938 5.41367 3.87508 5.57879 3.53998 5.84526C3.20488 6.11174 2.95295 6.46846 2.81389 6.87339C2.66157 7.29194 2.63191 7.74529 2.7284 8.18012C2.82488 8.61495 3.0435 9.0132 3.35856 9.32806L4.52256 10.5334L0.195225 14.8621C0.131551 14.9236 0.080763 14.9971 0.0458237 15.0785C0.0108844 15.1598 -0.0075064 15.2473 -0.00827561 15.3358C-0.00904482 15.4243 0.00782298 15.5121 0.0413435 15.594C0.0748641 15.676 0.124366 15.7504 0.186961 15.813C0.249556 15.8756 0.323991 15.9251 0.405922 15.9586C0.487853 15.9921 0.575639 16.009 0.664158 16.0082C0.752678 16.0075 0.840158 15.9891 0.921494 15.9541C1.00283 15.9192 1.07639 15.8684 1.13789 15.8047L5.44922 11.4934L6.28255 12.3561C6.84748 12.9554 7.62668 13.3068 8.44989 13.3334C8.71602 13.3337 8.98025 13.2886 9.23122 13.2001C9.61422 13.0679 9.95068 12.8275 10.1999 12.508C10.4491 12.1886 10.6003 11.8037 10.6352 11.4001C10.7027 10.758 10.6544 10.109 10.4926 9.48406L10.3512 8.80006C10.3116 8.63323 10.3153 8.45904 10.362 8.29404C10.4086 8.12905 10.4967 7.97873 10.6179 7.85739L12.0106 6.46672C12.1189 6.36735 12.259 6.3097 12.4059 6.30405C12.4704 6.30392 12.5343 6.31665 12.5938 6.34149C12.6533 6.36633 12.7073 6.40278 12.7526 6.44872L13.0899 6.78605C13.3689 7.08397 13.745 7.27271 14.1506 7.31841C14.5563 7.3641 14.9649 7.26376 15.3032 7.03539C15.5008 6.89495 15.6654 6.71309 15.7855 6.5025C15.9056 6.29191 15.9783 6.05766 15.9985 5.81609C16.0188 5.57451 15.9861 5.33142 15.9027 5.10378C15.8194 4.87614 15.6873 4.66943 15.5159 4.49805V4.49539Z"
                className="fill-[#303030] dark:fill-[#fff]"
              />
            </g>
            <defs>
              <clipPath id="clip0_50_112">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_4_262)">
              <path
                d="M0.666525 16.0001C0.843322 16 1.01286 15.9298 1.13786 15.8047L5.55053 11.392L6.38253 12.2534C7.00962 12.9161 7.8739 13.303 8.78587 13.3294C9.08988 13.3303 9.39181 13.2791 9.67853 13.1781C10.1216 13.0255 10.5108 12.7477 10.7989 12.3782C11.0871 12.0087 11.2618 11.5636 11.3019 11.0967C11.3742 10.4206 11.3241 9.73702 11.1539 9.07872L11.0112 8.38405C10.9842 8.27296 10.9862 8.15679 11.017 8.0467C11.0478 7.9366 11.1064 7.83629 11.1872 7.75538L12.2452 6.69672C12.2869 6.65482 12.3434 6.63089 12.4025 6.63005C12.4233 6.62619 12.4447 6.6282 12.4644 6.63585C12.484 6.64351 12.5012 6.65651 12.5139 6.67338C12.8487 7.02849 13.2992 7.25256 13.7845 7.30534C14.2697 7.35813 14.7578 7.23617 15.1612 6.96138C15.3979 6.79264 15.595 6.57433 15.7387 6.32165C15.8824 6.06898 15.9693 5.78801 15.9934 5.49832C16.0174 5.20862 15.978 4.91717 15.878 4.64425C15.7779 4.37133 15.6195 4.12351 15.4139 3.91805L12.1332 0.636046C11.7963 0.29078 11.3488 0.0749026 10.8689 0.0261568C10.389 -0.022589 9.90727 0.0988989 9.50787 0.36938C9.27112 0.538068 9.07399 0.756338 8.93021 1.00899C8.78643 1.26164 8.69945 1.54259 8.67534 1.83229C8.65122 2.12198 8.69055 2.41345 8.79058 2.6864C8.89061 2.95935 9.04893 3.2072 9.25453 3.41271L9.3052 3.46338C9.34339 3.50184 9.36482 3.55385 9.36482 3.60805C9.36482 3.66225 9.34339 3.71425 9.3052 3.75271L8.23853 4.81938C8.1567 4.90104 8.05505 4.96001 7.94355 4.99052C7.83205 5.02102 7.71453 5.02201 7.60253 4.99338L7.05786 4.85405C6.3879 4.67908 5.69185 4.62646 5.0032 4.69871C4.51477 4.7493 4.05098 4.93847 3.66651 5.24392C3.28204 5.54937 2.99291 5.95837 2.83319 6.42271C2.6589 6.89988 2.62454 7.41691 2.73414 7.91295C2.84374 8.40899 3.09275 8.8634 3.45186 9.22272L4.62386 10.436L0.195191 14.8621C0.101985 14.9553 0.0385141 15.0741 0.0128023 15.2034C-0.0129094 15.3327 0.000292604 15.4667 0.0507393 15.5885C0.101186 15.7103 0.186613 15.8144 0.296219 15.8877C0.405826 15.9609 0.534692 16 0.666525 16.0001ZM4.08986 6.86672C4.16499 6.63959 4.30434 6.43912 4.49105 6.28956C4.67776 6.14 4.90382 6.04778 5.14186 6.02405C5.29534 6.00807 5.44955 6.00006 5.60386 6.00005C5.98207 6.00007 6.35871 6.04869 6.72453 6.14471L7.2732 6.28472C7.60934 6.36976 7.96179 6.36625 8.29618 6.27454C8.63057 6.18282 8.93548 6.00602 9.1812 5.76138L10.2479 4.69471C10.5357 4.40604 10.6973 4.01503 10.6973 3.60738C10.6973 3.19974 10.5357 2.80872 10.2479 2.52005L10.1972 2.46938C10.1282 2.40052 10.0751 2.31735 10.0417 2.22574C10.0083 2.13413 9.99541 2.03631 10.0039 1.93918C10.0125 1.84205 10.0422 1.74797 10.091 1.66357C10.1398 1.57917 10.2066 1.50651 10.2865 1.45071C10.4288 1.3646 10.5964 1.33017 10.7611 1.35325C10.9257 1.37632 11.0774 1.45548 11.1905 1.57738L14.4732 4.86005C14.5422 4.92891 14.5953 5.01208 14.6287 5.10369C14.6621 5.1953 14.675 5.29312 14.6665 5.39025C14.658 5.48738 14.6282 5.58146 14.5794 5.66586C14.5306 5.75026 14.4638 5.82292 14.3839 5.87871C14.2401 5.96601 14.0703 6.00045 13.9039 5.97612C13.7374 5.95178 13.5847 5.87019 13.4719 5.74538C13.3347 5.60395 13.1706 5.49144 12.9892 5.41449C12.8078 5.33755 12.6129 5.29773 12.4159 5.29738C12.0003 5.29927 11.6017 5.46281 11.3045 5.75338L10.2472 6.81138C10.0071 7.05164 9.83216 7.34908 9.73885 7.67566C9.64554 8.00225 9.63694 8.34722 9.71387 8.67805L9.85987 9.38338C9.99439 9.89766 10.0353 10.432 9.98053 10.9607C9.9646 11.1764 9.88565 11.3826 9.75349 11.5537C9.62134 11.7249 9.4418 11.8534 9.2372 11.9234C8.89616 12.013 8.53671 12.0043 8.20045 11.8981C7.86419 11.7919 7.56489 11.5926 7.3372 11.3234L4.40386 8.29005C4.22095 8.10763 4.09416 7.87661 4.03851 7.62435C3.98286 7.37209 4.00068 7.10916 4.08986 6.86672Z"
                className="fill-[#303030] dark:fill-[#fff]"
              />
            </g>
            <defs>
              <clipPath id="clip0_4_262">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}
      </div>
    </>
  );
};

export default Thumbtack;
