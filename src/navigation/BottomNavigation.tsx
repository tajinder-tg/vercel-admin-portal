import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
import PollIcon from "src/assets/svg/poll.svg";
import PostIcon from "src/assets/svg/post.svg";
import AuctionIcon from "src/assets/svg/auction.svg";
import { useRouter } from "next/router";
import Image from "src/components/Image/image";
import Link from "next/link";
import { ROUTES } from "src/utils/routes";
const BottomNavigation = ({ navigationOptions }: any) => {
  const [activeIcon, setActiveIcon] = useState("Agenda");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const handleIconClick = (iconName: any) => {
    setActiveIcon(iconName);
  };
  useEffect(() => {
    setActiveIcon(router.pathname);
  }, [router]);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (value: any) => {
    setIsOpen(false);

    // Construct the URL with the actual query parameters
    const actualPath = {
      pathname: ROUTES.POSTS,
      query: { id: value },
    };

    // Construct the URL to show in the browser without query parameters
    const displayedPath = ROUTES.POSTS;

    // Push the new path to the router
    router.push(actualPath, displayedPath, { shallow: true });
  };

  return (
    <nav
      className="fixed inset-x-0 flex h-33 pb-16 -bottom-16"
      aria-hidden="false"
      data-shared-element-id="tab-bar"
    >
      <div className="h-full flex items-center justify-center flex-auto bg-black bg-cover bg-center">
        {navigationOptions.map((item: any) => {
          const HeaderIcon = item.icon;
          const isActive = activeIcon === item.asPath;
          const isButton = item.isButton;
          return !isButton ? (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => handleIconClick(item.href)}
              className={`${
                item.name !== "plus"
                  ? "fill-nili-dark-blue px-3 py-3 rounded-3 text-sm font-medium flex flex-auto justify-center gap-1.5 items-center flex-col cursor-pointer bg-transparent hover:text-primary-header"
                  : "mt-2 fill-nili-dark-blue px-3 py-3 rounded-3 text-sm font-medium flex flex-auto justify-center gap-1.5 items-center flex-col cursor-pointer bg-transparent hover:text-primary-header"
              }`}
            >
              <HeaderIcon
                className={`${isActive ? "fill" : ""}`}
                style={{
                  height: "10px",
                  width: "10px",
                  fill: isActive ? "red" : "",
                }}
              />
            </Link>
          ) : (
            <div
              key={item.name}
              className="flex items-center relative fill-nili-dark-blue px-3 py-3 rounded-3 text-sm font-medium flex flex-auto justify-center gap-1.5 items-center flex-col cursor-pointer bg-transparent hover:text-primary-header"
            >
              <button onClick={toggleMenu}>
                <HeaderIcon
                  className={`${isActive ? "fill" : ""}`}
                  style={{
                    height: "10px",
                    width: "10px",
                    fill: isActive ? "red" : "",
                  }}
                />
              </button>
              {isOpen && (
                <div className="absolute flex flex-col items-center space-y-4 mb-4 bottom-6 translate-x-[30%] rounded-full text-white h-[100px] w-[200px] right-5 post-navigation">
                  <button
                    className="absolute top-0 z-50"
                    onClick={() => handleClick("poll")}
                  >
                    <Image src={PollIcon} alt="poll icon" />
                  </button>
                  <button
                    className="absolute left-0 z-50"
                    onClick={() => handleClick("post")}
                  >
                    <Image src={PostIcon} alt="post icon" />
                  </button>
                  <button
                    className="absolute right-0 z-50"
                    onClick={() => handleClick("auction")}
                  >
                    <Image src={AuctionIcon} alt="auction icon" />
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

BottomNavigation.propTypes = {
  navigationOptions: PropTypes.arrayOf(PropTypes.object),
};

export default BottomNavigation;
