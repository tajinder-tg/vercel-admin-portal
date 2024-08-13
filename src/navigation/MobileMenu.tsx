// src/components/Menu.js

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import PlusIcon from "src/assets/svg/plus.jsx";
import ChevronRightIcon from "src/assets/svg/chevron-right.svg";
import userAvatar from "src/assets/unknown-person.png";

import creatorIcon from "src/assets/svg/creator-icon.svg";

import logoutIcon from "src/assets/svg/logout-icon.svg";
import { ROUTES } from "src/utils/routes.js";
import { useDispatch } from "react-redux";
import { CreatorModeAction } from "src/store/actions/layout.js";
import Dropdown from "src/layout/component/Dropdown";
import Image from "src/components/Image/image";
import { useRouter } from "next/router";
import { routingArr } from "./DesktopNavigation";
import { removeCurrentUser } from "src/utils/Constant";

const Menu = ({ isOpen, onClose, user }: any) => {
  const [isChecked, setIsChecked] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();
  const navigateTo = (path: any) => {
    router.push(path);
    onClose(); // Close the menu after navigating
  };

  const handleToggle = () => {
    setIsChecked(!isChecked);
    dispatch(CreatorModeAction(!isChecked));
  };
  const handleViewProfile = () => {
    onClose();
    // navigate(generateRoute(ROUTES.PROFILE, { id: "self" }));
  };
  const handleLogOut = () => {
    removeCurrentUser();
    router.push("/");
  };
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex z-10">
      <div
        className="w-[300px] bg-black text-white p-4  overflow-auto"
        style={{
          height: "100vh",
          transition: "transform 0.3s",
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
          //  border:'1px solid red'
        }}
      >
        <div className="flex items-center mb-4 mt-3">
          <button onClick={handleViewProfile}>
            <Image
              src={user?.profilePicture || userAvatar}
              alt="User Avatar"
              className="h-12 w-12 rounded-full mr-4"
            />
          </button>

          <div>
            <h2 className="text-lg font-bold">
              {user?.name || "Unknown User"}
            </h2>
            <p>{user?.followers || 0} followers</p>
          </div>
        </div>
        <div className="flex items-center justify-between mb-[16px] bg-gray-500 p-3 rounded-3 ">
          <div className="flex items-center justify-center w-full">
            <p className="text-5 items-center font-semi-bold">
              Admin Dashboard
            </p>
          </div>
        </div>

        <div>
          {routingArr.map((item: any, index) => {
            return (
              <MenuItem
                key={index}
                iconPath={item.icon}
                label={item.label}
                onClick={() => navigateTo(item.path)}
              />
            );
          })}

          <div className="h-14"></div>
        </div>
      </div>
      <div
        style={{ width: "calc(100% - 290px)" }}
        className=" bg-black bg-opacity-40 overflow-hidden"
        onClick={onClose}
      ></div>
    </div>
  );
};

const MenuItem = ({ iconPath, label, onClick }: any) => (
  <div
    className="flex items-center p-1.5 mb-[10px] hover:bg-gray-800 cursor-pointer rounded"
    onClick={onClick}
  >
    <Image src={iconPath} alt={label} className="h-6 w-6 mr-4" />
    <span className="text-white">{label}</span>
  </div>
);

export default Menu;
