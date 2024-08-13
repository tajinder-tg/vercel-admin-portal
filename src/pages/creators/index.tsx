import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { LuBellOff } from "react-icons/lu";
import { FaBan } from "react-icons/fa";
import ProfileIcon from "../../assets/svg/profiledemo.svg";
import Image from "src/components/Image/image";
import SearchHeader from "src/components/SearchHeader";
import BanModal from "src/components/BanModal";
import { useRouter } from "next/router";
import { Encrypt } from "src/utils/Constant";
import { DashboardLoader } from "src/loaders/Loader";
const Index = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const [isBanModal, setIsBanModal] = useState(false);
  const [selectedName, setSelectedName] = useState("");
  const router = useRouter();
  const isCreatorList = false;
  // Sample Data

  const userSubscriptionsData = [
    {
      id: "1",
      name: "Abigail Larson",
      totalRevenue: "$78569.99K",
      totalSubscribers: "2.3M",
      joiningDate: "19/06/2024",
    },
    {
      id: "2",
      name: "Adam Morgan",
      totalRevenue: "$78569.99K",
      totalSubscribers: "2.3M",
      joiningDate: "19/06/2024",
    },
    {
      id: "3",
      name: "Alex Ferguson",
      totalRevenue: "$78569.99K",
      totalSubscribers: "2.3M",
      joiningDate: "19/06/2024",
    },
    {
      id: "4",
      name: "Alison K Fenn",
      totalRevenue: "$78569.99K",
      totalSubscribers: "2.3M",
      joiningDate: "19/06/2024",
    },
    {
      id: "5",
      name: "Alyssa Rodwell",
      totalRevenue: "$78569.99K",
      totalSubscribers: "2.3M",
      joiningDate: "19/06/2024",
    },
  ];

  const closeModal = () => {
    setIsBanModal(false);
    setSelectedName("");
  };

  const openModal = (name: string) => {
    setIsBanModal(true);
    setSelectedName(name);
  };

  const handleClickUser = (item: any) => {
    router.push(`creators/${Encrypt(item.id)}`);
  };
  return (
    <>
      <SearchHeader />
      <div className="flex flex-col  mt-5">
        {/* Desktop Table  */}
        {isCreatorList ? (
          <DashboardLoader />
        ) : (
          <div className="flex-1 overflow-auto space-y-4  ml-1 px-4">
            <div className="mb-6">
              <div className="overflow-auto rounded-3">
                <table className="w-full text-white bg-[rgba(107,107,107,0.21)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] ">
                  {/* Table Head  */}
                  <thead className="bg-[rgba(107,107,107,0.21)]">
                    <tr>
                      <th className="p-3 text-left font-bold lg:text-4-5 md:p-2 lg:p-3">
                        Name
                      </th>
                      <th className="p-3 text-center font-bold lg:text-4-5 md:p-2 lg:p-3">
                        Total Revenue
                      </th>
                      <th className="p-3 text-center font-bold lg:text-4-5 md:p-2 lg:p-3">
                        Total Subscribers
                      </th>
                      <th className="p-3 text-center font-bold lg:text-4-5 md:p-2 lg:p-3">
                        Joining Date
                      </th>
                      <th className="p-3 text-center font-bold lg:text-4-5 md:p-2 lg:p-3">
                        {/* Actions */}
                      </th>
                    </tr>
                  </thead>
                  {/* Table body  */}
                  <tbody>
                    {userSubscriptionsData.map((sub, index) => (
                      <tr
                        key={index}
                        className="border-b-2 border-[#43425C] last:border-0"
                      >
                        <td className="p-4 text-left md:p-2 lg:p-4 md:py-3 flex items-center gap-1">
                          <Image src={ProfileIcon} alt="ProfileIcon" />
                          {sub.name}
                        </td>
                        <td className="p-4 text-center md:p-2 lg:p-4 md:py-3 ">
                          {sub.totalRevenue}
                        </td>
                        <td className="p-4 text-center md:p-2 lg:p-4 md:py-3 ">
                          {sub.totalSubscribers}
                        </td>

                        <td className="p-4 text-center md:p-2 lg:p-4 md:py-3 ">
                          {sub.joiningDate}
                        </td>
                        <td className="text-center ">
                          <div className="flex gap-2 items-center justify-center">
                            <button
                              className="px-2 py-1 rounded-2 bg-primary font-bold"
                              onClick={() => handleClickUser(sub)}
                            >
                              <p className="md:hidden xl:block">More Details</p>
                              <p className="md:block xl:hidden">
                                <LuBellOff fontSize="22px" />
                              </p>
                            </button>

                            <button
                              className="px-3 py-1 rounded-2 bg-[#FFFFFF1A] font-bold"
                              onClick={() => openModal(sub.name)}
                            >
                              <p className="md:hidden xl:block">Ban User</p>
                              <p className="md:block xl:hidden">
                                <FaBan fontSize="22px" />
                              </p>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
      {isBanModal && (
        <BanModal
          closeModal={closeModal}
          isBanModal={isBanModal}
          selectedName={selectedName}
        />
      )}
    </>
  );
};

export default Index;
