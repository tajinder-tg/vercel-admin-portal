import React, { useState } from "react";
import Image from "../Image/image";
import DoneIcon from "src/assets/svg/done.svg";
import { TbEdit } from "react-icons/tb";
import EditTier from "./EditTier";

const Tiers = () => {
  const [isTierEdit, setIsTierEdit] = useState(false);
  const[tierDetail,setTierDetail]=useState(null)
  const plan = [
    {
      name: "Tier 1",
      amount: "$50.00",
      subscribers: "89.3K",
      includes: [
        "Private Direct Messages",
        "Community Group Chat",
        "Tier 2 Content Unlock",
        "Exclusive Preview of Auctions",
      ],
    },
    {
      name: "Tier 2",
      amount: "$100.00",
      subscribers: "89.3K",
      includes: [
        "Private Direct Messages",
        "Community Group Chat",
        "Tier 2 Content Unlock",
        "Exclusive Preview of Auctions",
      ],
    },
    {
      name: "Tier 3",
      amount: "$75.00",
      subscribers: "89.3K",
      includes: [
        "Private Direct Messages",
        "Community Group Chat",
        "Tier 2 Content Unlock",
        "Exclusive Preview of Auctions",
      ],
    },
  ];

  const closeModal = () => {
    setIsTierEdit(false);
    setTierDetail(null)
  };
  const handleOpenClick = (item:any) => {
    setIsTierEdit(true);
    setTierDetail(item)
  };
  return (
    <>
      <div className="text-white flex w-full items-center justify-center gap-10 mb-[20px]">
        {plan.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className="bg-[rgba(107,107,107,0.21)] px-7 py-5 rounded-lg"
            >
              <p className="font-bold text-5">{item.name}</p>
              <p className="font-bold text-6 mb-[15px]">
                {item.amount}/<span className="text-4-5">Month</span>
              </p>
              <p className="font-bold text-5">Subscribers</p>
              <p className="font-bold text-6 mb-[15px]">{item.subscribers}</p>
              <p className="font-bold text-5 mb-[15px]">Features</p>
              {item.includes.map((item2: any, indexItem: number) => {
                return (
                  <p className="mb-4 flex gap-2" key={indexItem}>
                    <Image src={DoneIcon} alt="DoneIcon" />
                    {item2}
                  </p>
                );
              })}
              <button
                className="p-2 rounded-2 bg-primary w-full flex items-center justify-center font-bold gap-2"
                onClick={() => handleOpenClick(item)}
              >
                <TbEdit fontSize={20} />
                Edit
              </button>
            </div>
          );
        })}
      </div>
      {isTierEdit && (
        <EditTier closeModal={closeModal} isTierEdit={isTierEdit} tierDetail={tierDetail}/>
      )}
    </>
  );
};

export default Tiers;
