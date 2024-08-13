import React, { useEffect, useState } from "react";

import { ROUTES } from "src/utils/routes.js";

import House from "src/assets/svg/house.jsx";
import Person from "src/assets/svg/person.jsx";
import People from "src/assets/svg/people.jsx";
import unknownProfile from "src/assets/unknown-person.png";
import BackIcon from "src/assets/svg/backCircular.svg";
import { useMediaQuery } from "react-responsive";
import BottomNavigation from "../navigation/BottomNavigation";
import VerticalNavigation from "../navigation/VerticalNavigation";
import DesktopHeader from "./component/DesktopHeader";
import { useRouter } from "next/router";
import Image from "src/components/Image/image";
import { getCurrentUser } from "src/utils/Constant";

const navigation = [
  {
    name: "Dashboard",
    href: ROUTES.DASHBOARD,
    icon: House,
    isButton: false,
    asPath: ROUTES.DASHBOARD,
  },
  {
    name: "Creator",
    href: ROUTES.CREATOR,
    icon: People,
    isButton: false,
    asPath: ROUTES.CREATOR,
  },

  {
    name: "User",
    href: ROUTES.USER,
    icon: Person,
    isButton: false,
    asPath: ROUTES.USER,
  },
  {
    name: "Account",
    href: "/profile/0/details",
    icon: Person,
    isButton: false,
    asPath: "/profile/[id]/details",
  },
];

const currentUser = {
  profilePicture: unknownProfile,
  name: "Current Creator",
  followers: 4500,
  walletAmount: "$150.00",
};

const UserLayout = ({ children }: any) => {
  const [isHeight, setIsHeight] = useState(false);
  const token = getCurrentUser();
  // useEffect(() => {
  //   if (!token) {
  //     router.push(ROUTES.HOME);
  //   }
  // }, []);
  const router = useRouter();
  const { pathname } = router;
  let segments = pathname.split("/");
  const isDesktop = useMediaQuery({ minWidth: 768 });
  let hasReplacedWithName = false;
  const capitalizedPathname = segments.map((segment, index) => {
    const contentRoutes = [
      ROUTES.CONTENTAUCTION,
      ROUTES.CONTENTPOLL,
      ROUTES.CONTENTPOST,
      ROUTES.CONTENTCOLLECTION,
    ];

    if (
      segment.length > 0 &&
      index < 2 &&
      pathname !== ROUTES.FEED &&
      !contentRoutes.includes(pathname)
    ) {
      return segment.charAt(0).toUpperCase() + segment.slice(1);
    } else if (contentRoutes.includes(pathname) && !hasReplacedWithName) {
      hasReplacedWithName = true;
      return currentUser.name;
    }
  });
  useEffect(() => {
    if (
      (pathname === ROUTES.POSTS && !isDesktop) ||
      (pathname === ROUTES.SETTINGS && !isDesktop) ||
      (pathname === ROUTES.CONVERSATIONS && !isDesktop) ||
      (!isDesktop && pathname == ROUTES.FEED) ||
      (!isDesktop && pathname.includes("profile"))
    ) {
      setIsHeight(true);
    } else {
      setIsHeight(false);
    }
  }, [router]);
  return (
    <div className="app-wrapper">
      <div className=" app-content flex bg-personal-bg bg-no-repeat bg-cover min-h-[100vh] ">
        {/* Sidebar */}
        <div className=" bg-sidebar-bg bg-cover bg-center md:w-60 lg:w-70 xl:w-80 flex-shrink-0 min-h-[100vh]">
          <div className="relative flex items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center z-50 md:hidden">
              <BottomNavigation navigationOptions={navigation} />
            </div>
            <div className="hidden md:block">
              <VerticalNavigation user={currentUser} />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-grow ">
          {!isDesktop &&
          pathname !== ROUTES.SETTINGS &&
          pathname !== ROUTES.FEED &&
          pathname !== ROUTES.CONVERSATIONS &&
          pathname !== ROUTES.POSTS &&
          !pathname.includes("profile") ? (
            <div className="flex items-center mb-4 mt-3">
              <button
                onClick={() => router.push("/feed")}
                className="px-4  rounded-full mr-2"
              >
                <Image src={BackIcon} alt="BackIcon" />
              </button>
              <h1 className="text-6 font-bold text-white">
                {capitalizedPathname}
              </h1>
            </div>
          ) : (
            <div>
              <DesktopHeader
                title={capitalizedPathname}
                currentUser={currentUser}
              />
            </div>
          )}
          <div
            style={{
              maxHeight: isHeight ? "100vh" : "calc(100vh - 100px)",
              overflow: "auto",
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
