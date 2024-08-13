import React from "react";

const Switch = ({ isChecked, handleToggle }: any) => {
  return (
    <>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleToggle}
          className="sr-only peer"
        />
        <div
          className={`relative w-12 h-[26px] rounded-full transition-colors ${
            isChecked ? "bg-[#514DFB]" : "bg-[#949494]"
          }`}
        >
          <div
            className={`absolute top-[3px] left-[3px] w-5 h-5 bg-white rounded-full transition-transform ${
              isChecked ? "transform translate-x-[20px]" : ""
            }`}
          />
        </div>
      </label>
    </>
  );
};

export default Switch;
