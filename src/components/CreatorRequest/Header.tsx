import React, { useRef } from "react";
import searchIcon from "src/assets/svg/search.svg";

import Image from "../Image/image";

const Header = ({ searchVal, handleSearch }: any) => {
  const inputRef: any = useRef(null);
  const handleOnChange = (event: any) => {
    let text = event.target.value;
    handleSearch(text);
  };
  return (
    <div className="flex p-5 w-[40%]">
      <div
        className="w-full flex items-center gap-3 p-4 h-[48px]  bg-[rgba(107,107,107,0.21)] rounded-lg"
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        <Image
          src={searchIcon}
          alt="Search"
          className="transform -translate-y-1/2 h-5 w-5 text-white  outline-none"
        />
        <input
          ref={inputRef}
          autoComplete="off"
          type="text"
          placeholder="Search"
          value={searchVal}
          className="w-full bg-[unset] rounded-2 text-white  outline-none"
          onChange={handleOnChange}
        />
      </div>
    </div>
  );
};

export default Header;
