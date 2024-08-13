// src/components/common/DesktopHeader.js
import { useRouter } from "next/router";
import React from "react";
import { useMediaQuery } from "react-responsive";
import searchIcon from "src/assets/svg/search.svg";
import unknownProfile from "src/assets/unknown-person.png";
import Image from "src/components/Image/image";
const DesktopHeader = ({ title, currentUser }: any) => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const router = useRouter();
  const handleViewProfile = () => {
    // router.push("/profile/0/details");
  };
  return (
    <div className="pt-6 md:px-3 lg:px-5 xs:hidden md:block h-[100px]">
      <div
        className={`pb-5 flex items-center justify-between `}
        style={{
          borderBottom: "1px solid #FFFFFF1A",
          marginBottom: "20px",
          display: isDesktop ? "flex" : "hidden",
        }}
      >
        <h5 className="text-5 font-bold text-white mt-2">{title}</h5>
        <div className="flex items-center md:gap-2 lg:gap-5">
          <div className="flex  gap-2">
            <div className="font-medium dark:text-white">
              <p className="font-bold text-white md:text-[12px] lg:text-[13px]">
                {currentUser.name}
              </p>
              <p className="font-bold text-white md:text-[11px] lg:text-[12px]">
                5.2M Followers
              </p>
            </div>
            <div className="cursor-pointer" onClick={handleViewProfile}>
              <Image
                className="w-10 h-10 p-1 rounded-full ring-2 ring-purple dark:ring-purple"
                src={currentUser.profilePicture}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
