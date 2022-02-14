import React, { FunctionComponent } from "react";

interface IThumbtack {
  value?: boolean;
  onClickHandler?: () => any;
}

const Thumbtack: FunctionComponent<IThumbtack> = ({ value, onClickHandler = () => {} }) => {
  return (
    <div className="cursor-pointer relative -top-[1px]" onClick={onClickHandler}>
      {value ? (
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_65_115)">
            <path
              d="M16.4726 4.77678L12.2642 0.567148C11.9664 0.258837 11.5698 0.0651391 11.1437 0.0199467C10.7176 -0.0252457 10.2892 0.0809453 9.93351 0.319939C9.72377 0.469212 9.5491 0.662477 9.42167 0.886256C9.29424 1.11004 9.21712 1.35894 9.19569 1.61562C9.17427 1.87229 9.20904 2.13055 9.2976 2.37238C9.38616 2.61423 9.52636 2.83382 9.70843 3.01586L10.1274 3.43448C10.2342 3.54198 10.2941 3.68738 10.2941 3.83894C10.2941 3.9905 10.2342 4.1359 10.1274 4.2434L8.64111 5.7309C8.51068 5.86087 8.34883 5.95483 8.17134 6.00361C7.99385 6.05238 7.80675 6.05434 7.62829 6.00928L7.04791 5.86053C6.37863 5.68568 5.68331 5.63313 4.99537 5.7054C4.54327 5.75245 4.11404 5.92789 3.75828 6.21102C3.40252 6.49415 3.13505 6.87317 2.98742 7.3034C2.82571 7.74811 2.79422 8.2298 2.89666 8.69181C2.99909 9.15381 3.23119 9.57695 3.56568 9.91149L4.80145 11.1922L0.207286 15.7914C0.139686 15.8568 0.0857665 15.9348 0.0486728 16.0213C0.0115791 16.1077 -0.0079457 16.2007 -0.00876234 16.2947C-0.00957898 16.3887 0.0083289 16.482 0.0439163 16.5691C0.0795038 16.6562 0.132058 16.7352 0.198513 16.8017C0.264967 16.8683 0.343992 16.9208 0.430975 16.9564C0.517958 16.992 0.611157 17.01 0.705134 17.0091C0.799112 17.0084 0.891986 16.9888 0.978338 16.9517C1.06469 16.9146 1.14278 16.8606 1.20808 16.7929L5.78525 12.2122L6.66996 13.1288C7.26972 13.7655 8.09697 14.1389 8.97094 14.1672C9.25348 14.1675 9.534 14.1196 9.80045 14.0255C10.2071 13.8851 10.5643 13.6296 10.8289 13.2902C11.0934 12.9508 11.2539 12.5419 11.291 12.113C11.3627 11.4308 11.3114 10.7412 11.1396 10.0772L10.9895 9.35049C10.9474 9.17323 10.9514 8.98816 11.001 8.81284C11.0504 8.63754 11.144 8.47783 11.2726 8.3489L12.7512 6.87132C12.8662 6.76574 13.0149 6.70448 13.1709 6.69848C13.2394 6.69834 13.3072 6.71187 13.3704 6.73826C13.4335 6.76465 13.4909 6.80338 13.539 6.85219L13.8971 7.21061C14.1933 7.52715 14.5926 7.72768 15.0232 7.77624C15.4539 7.82478 15.8877 7.71817 16.2468 7.47553C16.4566 7.32631 16.6314 7.13309 16.7589 6.90933C16.8864 6.68558 16.9636 6.43669 16.985 6.18002C17.0066 5.92334 16.9718 5.66506 16.8833 5.42319C16.7949 5.18133 16.6546 4.9617 16.4726 4.77961V4.77678Z"
              className="fill-[#303030] dark:fill-[#fff]"
            />
          </g>
          <defs>
            <clipPath id="clip0_65_115">
              <rect width="17" height="17" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ) : (
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_55_137)">
            <path
              d="M0.708183 17.0001C0.896029 17 1.07617 16.9254 1.20897 16.7925L5.89744 12.1041L6.78144 13.0192C7.44772 13.7233 8.36602 14.1344 9.33498 14.1625C9.658 14.1635 9.9788 14.1091 10.2834 14.0017C10.7542 13.8396 11.1677 13.5444 11.4739 13.1518C11.7801 12.7593 11.9657 12.2863 12.0082 11.7903C12.0851 11.0719 12.0318 10.3456 11.851 9.64614L11.6994 8.90805C11.6707 8.79002 11.6728 8.66659 11.7055 8.54962C11.7383 8.43264 11.8006 8.32605 11.8864 8.24009L13.0105 7.11526C13.0549 7.07075 13.1149 7.04533 13.1777 7.04443C13.1997 7.04032 13.2225 7.04246 13.2434 7.0506C13.2643 7.05873 13.2825 7.07254 13.296 7.09047C13.6518 7.46777 14.1304 7.70584 14.646 7.76193C15.1615 7.81801 15.6802 7.68844 16.1088 7.39647C16.3603 7.21718 16.5697 6.98523 16.7224 6.71676C16.8751 6.44829 16.9674 6.14976 16.993 5.84196C17.0185 5.53416 16.9767 5.22449 16.8703 4.93452C16.764 4.64454 16.5957 4.38123 16.3772 4.16293L12.8915 0.675799C12.5336 0.308954 12.0581 0.079584 11.5482 0.0277916C11.0383 -0.0240008 10.5265 0.10508 10.1021 0.392466C9.85056 0.571698 9.64111 0.80361 9.48835 1.07205C9.33558 1.34049 9.24317 1.63901 9.21755 1.94681C9.19192 2.25461 9.23371 2.5643 9.33999 2.8543C9.44627 3.1443 9.61449 3.40765 9.83294 3.62601L9.88677 3.67984C9.92735 3.72071 9.95012 3.77596 9.95012 3.83355C9.95012 3.89114 9.92735 3.94639 9.88677 3.98726L8.75344 5.12059C8.6665 5.20735 8.55849 5.27001 8.44002 5.30242C8.32155 5.33483 8.19669 5.33588 8.07769 5.30547L7.49898 5.15743C6.78714 4.97152 6.04759 4.91561 5.31589 4.99238C4.79694 5.04613 4.30417 5.24712 3.89567 5.57167C3.48717 5.89621 3.17996 6.33077 3.01027 6.82413C2.82508 7.33113 2.78857 7.88047 2.90502 8.40751C3.02147 8.93455 3.28604 9.41737 3.6676 9.79914L4.91285 11.0883L0.207391 15.7909C0.108359 15.89 0.0409212 16.0162 0.0136025 16.1536C-0.0137162 16.291 0.000310892 16.4334 0.0539105 16.5628C0.10751 16.6922 0.198276 16.8028 0.314733 16.8806C0.43119 16.9585 0.56811 17 0.708183 17.0001ZM4.34548 7.29589C4.4253 7.05457 4.57336 6.84156 4.77174 6.68266C4.97012 6.52375 5.21031 6.42576 5.46323 6.40055C5.6263 6.38358 5.79015 6.37507 5.9541 6.37505C6.35595 6.37507 6.75613 6.42673 7.14481 6.52876L7.72777 6.67751C8.08493 6.76787 8.4594 6.76415 8.81469 6.6667C9.16997 6.56925 9.49395 6.3814 9.75502 6.12147L10.8884 4.98813C11.1942 4.68142 11.3659 4.26596 11.3659 3.83284C11.3659 3.39972 11.1942 2.98427 10.8884 2.67755L10.8345 2.62372C10.7612 2.55055 10.7048 2.46218 10.6693 2.36485C10.6338 2.26751 10.6201 2.16358 10.6292 2.06038C10.6382 1.95718 10.6698 1.85722 10.7217 1.76754C10.7736 1.67787 10.8445 1.60067 10.9294 1.54138C11.0806 1.44988 11.2587 1.41331 11.4336 1.43783C11.6086 1.46234 11.7698 1.54645 11.8899 1.67597L15.3778 5.1638C15.4511 5.23697 15.5075 5.32534 15.543 5.42267C15.5785 5.52 15.5922 5.62393 15.5831 5.72714C15.5741 5.83034 15.5425 5.9303 15.4906 6.01997C15.4387 6.10965 15.3678 6.18685 15.2829 6.24613C15.1301 6.33888 14.9497 6.37548 14.7729 6.34962C14.596 6.32377 14.4337 6.23708 14.3139 6.10447C14.1681 5.9542 13.9937 5.83466 13.801 5.7529C13.6083 5.67115 13.4012 5.62883 13.1919 5.62847C12.7503 5.63048 12.3268 5.80424 12.0111 6.11297L10.8876 7.23709C10.6326 7.49236 10.4467 7.8084 10.3475 8.15539C10.2484 8.50239 10.2393 8.86892 10.321 9.22043L10.4761 9.96984C10.619 10.5163 10.6625 11.084 10.6043 11.6458C10.5874 11.8749 10.5035 12.094 10.3631 12.2758C10.2227 12.4577 10.0319 12.5943 9.81452 12.6686C9.45217 12.7639 9.07025 12.7545 8.71298 12.6417C8.3557 12.5289 8.03769 12.3172 7.79577 12.0311L4.6791 8.80818C4.48476 8.61436 4.35005 8.36889 4.29092 8.10087C4.23179 7.83284 4.25072 7.55348 4.34548 7.29589V7.29589Z"
              className="fill-[#303030] dark:fill-[#fff]"
            />
          </g>
          <defs>
            <clipPath id="clip0_55_137">
              <rect width="17" height="17" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
    </div>
  );
};

export default Thumbtack;
