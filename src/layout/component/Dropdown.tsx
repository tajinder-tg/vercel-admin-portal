import React, { useEffect, useState } from "react";
import upwardIcon from "../../assets/svg/upwardIcon.svg";
import downwardIcon from "../../assets/svg/dropdownIcon.svg";
import myContentIcon from "../../assets/svg/my-content-icon.svg";
import { BsDot } from "react-icons/bs";

import { useRouter } from "next/router";
import Image from "src/components/Image/image";
import { ROUTES } from "src/utils/routes";

const Dropdown = ({ isSelected }: any) => {
  const router = useRouter();
  const { pathname } = router;
  const contentRouting = [
    { name: "Posts", url: ROUTES.CONTENTPOST },
    { name: "Polls", url: ROUTES.CONTENTPOLL },
    { name: "Auctions", url: ROUTES.CONTENTAUCTION },
    { name: "Collections", url: ROUTES.CONTENTCOLLECTION },
  ];
  const [isDropDown, setDropDown] = useState(false);
  useEffect(() => {
    const isInculeds = contentRouting.some((item) =>
      item.url.includes(pathname)
    );
    setDropDown(isInculeds);
  }, [pathname]);
  return (
    <>
      <div
        className={`flex items-center justify-between p-[13px] cursor-pointer rounded last:mb-0 ${
          isSelected ? "bg-primary rounded-3" : "md:hover:bg-gray-800 rounded-3"
        }  md:mb-0 ${
          !isDropDown &&
          "xs:mb-[8px] sm:mb-0 md:mb-[8px] lg:mb-[4px] xl:mb-[4px] 2xl:mb-[8px] 3xl:mb-[8px] 4xl:mb-[16px]"
        }
     4xl:p-[13px]  2xl:p-[10px] xl:p-[8px] lg:p-[8px] md:p-[7px] xs:p-2
    `}
        onClick={() => setDropDown(!isDropDown)}
      >
        <div className="flex gap-4 items-center">
          <Image
            src={myContentIcon}
            alt="My Content"
            className="h-[20px] w-[18px]"
          />
          <span
            className={`text-white xs:text-[15px] lg:text-[15px] xl:text-[16px] 2xl:text-[16px] 3xl:text-[17px] 4xl:text-[18px] `}
          >
            My Content
          </span>
        </div>
        <Image
          src={isDropDown ? upwardIcon : downwardIcon}
          alt="downwardIcon"
        />
      </div>
      {isDropDown && (
        <div className="  4xl:px-[13px]  2xl:px-[10px] xl:px-[8px] lg:px-[8px]  flex justify-center flex-col w-[80%] ">
          {contentRouting.map((content, index) => {
            return (
              <div
                onClick={() => router.push(content.url)}
                key={index}
                className={`${
                  pathname == content.url ? "text-white" : "text-gray-400"
                } flex gap-2 items-center mb-2 cursor-pointer flex justify-start w-full`}
              >
                <div className="w-1/6"></div>
                <BsDot />
                <p className="text-start">{content.name}</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Dropdown;
