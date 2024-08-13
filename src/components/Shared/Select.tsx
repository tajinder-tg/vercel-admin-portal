import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa6";

const Select = ({ optionsArr }: any) => {
  const [categoryName, setCategoryName] = useState(optionsArr[0].label);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <div className="relative">
      <div
        className="w-full bg-[#FFFFFF1A] px-5 py-2 rounded-full flex gap-3 items-center cursor-pointer "
        onClick={() => {
          setMenuIsOpen(!menuIsOpen);
        }}
      >
        <p className="text-white">{categoryName ? categoryName : "Select"}</p>
        {menuIsOpen ? (
          <FaChevronUp className="text-white" />
        ) : (
          <FaChevronDown className="text-white" />
        )}
      </div>
      {menuIsOpen && (
        <div className=" bg-[#FFFFFF1A] rounded-[10px] w-full absolute top-full mt-1 z-10 max-h-[200px] overflow-auto backdrop-blur">
          {optionsArr.map((item: any, index: any) => {
            return (
              <div
                key={index}
                className="text-white flex justify-between font-bold px-[12px] py-[8px] w-full cursor-pointer hover:bg-purple"
               
                onClick={() => {
                  setCategoryName(item.label);
                  setMenuIsOpen(false);
                }}
              >
                <p className="w-[90%]">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Select;
