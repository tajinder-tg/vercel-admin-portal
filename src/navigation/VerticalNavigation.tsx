import React, { useState, useEffect } from "react";
import logoutIcon from "src/assets/svg/logout-icon.svg";
import image from "src/assets/svg/layoutlogo.svg";
import { CreatorModeAction } from "src/store/actions/layout.js";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Image from "src/components/Image/image";
import { routingArr } from "src/navigation/DesktopNavigation";
import { removeCurrentUser } from "src/utils/Constant";
import { logout } from "src/store/actions/auth";

const VerticalNavigation = ({ user }: any) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const navigateTo = (path: any) => {
    router.push(path);
  };
  useEffect(() => {
    setSelectedOption(router.pathname);
  }, [router]);
  const handleOnClick = (navigateToPath: any) => {
    navigateTo(navigateToPath); // Call the navigation function
    setSelectedOption(navigateToPath); // Call the state update function
  };
  const handleLogOut = () => {
    removeCurrentUser();
    router.push("/");
    dispatch(logout());
  };
  const handleToggle = () => {
    setIsChecked(!isChecked);
    dispatch(CreatorModeAction(!isChecked));
  };
  if (!true) return null;

  return (
    <div className="fixed flex z-100  h-[100vh]">
      <div
        className="md:w-60 lg:w-70 xl:w-80  text-white p-4"
        style={{
          transition: "transform 0.3s",
          transform: true ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        <div className="flex items-center justify-center pt-[9px] pb-[19px]">
          <Image className="flex" src={image} alt="Welcome" />
        </div>

        <hr className="mb-[16px] text-[#FFFFFF1A]" />
        {/* // Wallet  */}
        <div className="flex items-center justify-between mb-[16px] bg-[#FFFFFF1A]  p-3 rounded-3 ">
          <div className="flex items-center justify-center w-full">
            <p className="text-5 items-center font-semi-bold">
              Admin Dashboard
            </p>
          </div>
        </div>
        <div
          className="overflow-auto  mb-5"
          style={{ height: "calc(100vh - 220px)" }}
        >
          {routingArr.map((item: any, index) => {
            return (
              <MenuItem
                key={index}
                iconPath={item.icon}
                label={item.label}
                isSelected={selectedOption === item.path}
                onClick={() => handleOnClick(item.path)}
              />
            );
          })}
        </div>
      </div>
      <div className="absolute bottom-0 left-5 w-70 bg-[#252525] md:w-50 xl:w-70 ">
        <MenuItem
          iconPath={logoutIcon}
          label="Logout"
          isSelected={selectedOption === "Logout"}
          onClick={handleLogOut}
        />
      </div>
    </div>
  );
};

const MenuItem = ({ iconPath, label, isSelected, onClick }: any) => (
  <div
    className={`flex items-center p-[13px] cursor-pointer rounded last:mb-0 ${
      isSelected ? "bg-primary rounded-3" : "hover:bg-gray-800 rounded-3"
    } mb-0 sm:mb-0 md:mb-[8px] lg:mb-[4px] xl:mb-[4px] 2xl:mb-[8px] 3xl:mb-[8px] 4xl:mb-[16px]
     4xl:p-[13px]  2xl:p-[10px] xl:p-[8px] lg:p-[8px] md:p-[7px]
    `}
    onClick={onClick}
  >
    <Image src={iconPath} alt={label} className="h-[20px] w-[18px] mr-4" />
    <span className="text-white text-[18px] md:text-[15px] lg:text-[15px] xl:text-[16px] 2xl:text-[16px] 3xl:text-[17px] 4xl:text-[18px] ">
      {label}
    </span>
  </div>
);

export default VerticalNavigation;
