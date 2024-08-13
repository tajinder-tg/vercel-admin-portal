import React from "react";
import BackIcon from "src/assets/svg/backCircular.svg";
import Image from "src/components/Image/image";

const MobileHeader = ({ handleBack, capitalizedPathname }: any) => {
  return (
    <div className="flex items-center mb-4 pt-3 ">
      <button onClick={handleBack} className="px-4  rounded-full mr-2">
        <Image src={BackIcon} alt="BackIcon" />
      </button>
      <h1 className="text-6 font-bold text-white">{capitalizedPathname}</h1>
    </div>
  );
};

export default MobileHeader;
