import React from "react";
import AnalyticsGraph from "src/components/AnalyticsComponent/AnalyticsGraph";
import dollarIcon from "src/assets/svg/dollarIcon.svg";
import increasePriceIcon from "src/assets/svg/increasePrice.svg";
import payoutIcon from "src/assets/svg/totalPayout.svg";
import Image from "src/components/Image/image";
import increaseIcon from "src/assets/svg/increase.svg";
import { useMediaQuery } from "react-responsive";

const Index = () => {
  const isDesktop=useMediaQuery({minWidth:1440})
  const analyticsData = [
    {
      title: "Net Payment",
      icon: dollarIcon,
      value: "$798698.56",
      percentage: "28.46%",
      bgColor: "bg-green-500",
    },
    {
      title: "Net Revenue",
      icon: increasePriceIcon,
      value: "$798698.56",
      percentage: "28.46%",
      bgColor: "bg-blue-500",
    },
    {
      title: "Total Payout",
      icon: payoutIcon,
      value: "$798698.56",
      percentage: "28.46%",
      bgColor: "bg-yellow-500",
    },
    {
      title: "Total Payout",
      icon: payoutIcon,
      value: "$798698.56",
      percentage: "28.46%",
      bgColor: "bg-red-500",
    },
  ];
  return (
    <div className="px-5">
      <div className={`flex gap-5 w-full mb-[20px] lg:flex-col 2xl:flex-row`}>
      {!isDesktop &&
        <div className="flex w-full md:flex-wrap xl:flex-nowrap gap-5  mt-[30px]">
        {analyticsData.map((data, index) => (
          <div
            key={index}
            className="bg-[rgba(107,107,107,0.21)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-3 p-4 flex flex-col justify-between xs:p-2 md:p-4 w-[47%]"
          >
            <div className="flex items-center mb-4">
              <div
                className={`w-10 h-10 rounded-full bg-white flex items-center justify-center `}
              >
                <Image src={data.icon} alt={data.title} />
              </div>
              <p className="text-white ml-2 text-5 font-bold xs:text-3-75 md:text-4 lg:text-5">
                {data.title}
              </p>
            </div>
            <div className="flex items-center sx:gap-2 md:gap-2">
              <p className="text-white  text-5 font-bold xs:text-4 md:text-5 truncate">
                {data.value}
              </p>
              <span className="flex items-center  sx:gap-2">
                <Image src={increaseIcon} alt="Increase" />
                <p className="text-4 font-bold  text-white">
                  {data.percentage}
                </p>
              </span>
            </div>
          </div>
        ))}
      </div>
        }
        <div className="2xl:w-[49%] lg:w-full">
          <AnalyticsGraph title={"Total Payments"} />
        </div>
        {isDesktop &&
        <div className="flex flex-wrap w-[49%] 2xl:gap-5 4xl:gap-10 mt-[30px]">
        {analyticsData.map((data, index) => (
          <div
            key={index}
            className="bg-[rgba(107,107,107,0.21)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-3 p-4 flex flex-col justify-between xs:p-2 md:p-4 w-[47%]"
          >
            <div className="flex items-center mb-4">
              <div
                className={`w-10 h-10 rounded-full bg-white flex items-center justify-center `}
              >
                <Image src={data.icon} alt={data.title} />
              </div>
              <p className="text-white ml-2 text-5 font-bold xs:text-3-75 md:text-4 lg:text-5">
                {data.title}
              </p>
            </div>
            <div className="flex gap-4 items-center sx:gap-2 md:gap-4">
              <p className="text-white  text-5 font-bold xs:text-4 md:text-5">
                {data.value}
              </p>
              <span className="flex items-center gap-2 sx:gap-1 md:gap-2">
                <Image src={increaseIcon} alt="Increase" />
                <p className="text-4 font-bold  text-white">
                  {data.percentage}
                </p>
              </span>
            </div>
          </div>
        ))}
      </div>
        }
        
      </div>
      <div className="flex gap-5 w-full mb-[20px]">
        <div className="w-[49%]">
          <AnalyticsGraph title={"Razorpay"} />
        </div>
        <div className="w-[49%]">
          <AnalyticsGraph title={"Stripe"} />
        </div>
      </div>
    </div>
  );
};

export default Index;
