import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { LuBellOff } from "react-icons/lu";
import { FaBan } from "react-icons/fa";
import Image from "src/components/Image/image";
import SearchHeader from "src/components/SearchHeader";
import BanModal from "src/components/BanModal";
import { useRouter } from "next/router";
import { Encrypt } from "src/utils/Constant";
import { DashboardLoader } from "src/loaders/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  getCreatorRequestList,
  updateUserStateAction,
} from "src/store/actions/creatorRequest";
import Header from "src/components/CreatorRequest/Header";
import moment from "moment";
import swal from "sweetalert";
const Index = () => {
  const dispatch = useDispatch();
  const { isCreatorRequestList, creatorRequestList } = useSelector(
    (state: any) => state.creatorRequest
  );
  const [userList, setUserList] = useState<any>([]);
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const [isBanModal, setIsBanModal] = useState(false);
  const [selectedName, setSelectedName] = useState("");
  const [searchval, setSearchVal] = useState("");
  const router = useRouter();
  // Sample Data
  useEffect(() => {
    let filteresUser = creatorRequestList?.filter(
      (item: any) => item.creator_status !== 3
    );
    setUserList(filteresUser ?? []);
  }, [creatorRequestList]);
  const userSubscriptionsData = [
    {
      id: "1",
      name: "Abigail Larson",
      user_name: "@AbigailLarson123",
      tier: "Tier 1",
      totalSpend: "$7.99",
      subscriptionStatus: 3,
      joiningDate: "19/06/2024",
    },
    {
      id: "2",
      name: "Adam Morgan",
      tier: "Tier 1",
      totalSpend: "$14.99",
      subscriptionStatus: 3,
      joiningDate: "19/06/2024",
    },
    {
      id: "3",
      name: "Alex Ferguson",
      user_name: "@AbigailLarson123",
      tier: "Tier 3",
      totalSpend: "$29.99",
      subscriptionStatus: 3,
      joiningDate: "19/06/2024",
    },
    {
      id: "4",
      name: "Alison K Fenn",
      user_name: "@AbigailLarson123",
      tier: "Tier 2",
      totalSpend: "$39.99",
      subscriptionStatus: 3,
      joiningDate: "19/06/2024",
    },
    {
      id: "5",
      name: "Alyssa Rodwell",
      user_name: "@AbigailLarson123",
      tier: "Tier 3",
      totalSpend: "$59.99",
      subscriptionStatus: 4,
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
    router.push(`/users/${Encrypt(item.id)}`);
  };

  useEffect(() => {
    let payload = {
      limit: 100,
    };
    dispatch(getCreatorRequestList(payload));
  }, []);
  const handleSearch = (value: any) => {
    setSearchVal(value);
  };
  const updateStatus = (value: number, id: string) => {
    swal({
      text: `Are you sure you want to ${value == 3 ? "Accept" : "Reject"} this User as Creator?`,
      icon: "warning",
      buttons: ["No", "Yes"],
      dangerMode: false,
    }).then(async (willDelete) => {
      if (willDelete) {
        let response: any = "";
        if (!response) {
          swal({
            text: "Plase Wait!",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
            buttons: [""],
            dangerMode: true,
          });
        }
        let payload = {
          user_id: id,
          status: value,
        };
        response = await dispatch(updateUserStateAction(payload));
        console.log(response);
        if (!response) {
          swal(`Something went wrong!`, {
            icon: "error",
          });
          return;
        } else if (
          response?.data?.status_code == 200 ||
          response?.data?.status_code == 201
        ) {
          swal(`${value == 3 ? "Accepted" : "Rejected"} successfully`, {
            icon: "success",
          });
        } else {
          swal(response?.response?.data?.message ?? `Something went wrong!`, {
            icon: "error",
          });
        }
      }
    });
  };
  return (
    <>
      <Header searchVal={searchval} handleSearch={handleSearch} />

      <div className="flex flex-col  mt-3">
        {/* Desktop Table  */}
        {isCreatorRequestList ? (
          <DashboardLoader />
        ) : (
          <div className="flex-1 overflow-auto space-y-4  ml-1 px-4">
            <div className="mb-6">
              <div className="overflow-auto rounded-3">
                <table className="min-w-full text-white bg-[rgba(107,107,107,0.21)] shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
                  {/* Table Head  */}
                  <thead className="bg-[rgba(107,107,107,0.21)]">
                    <tr>
                      <th className="p-3 text-center font-bold lg:text-4-5 md:p-2 lg:p-3"></th>
                      <th className="p-3 text-left font-bold lg:text-4-5 md:p-2 lg:p-3">
                        Name
                      </th>
                      <th className="p-3 text-center font-bold lg:text-4-5 md:p-2 lg:p-3">
                        User Name
                      </th>

                      <th className="p-3 text-center font-bold lg:text-4-5 md:p-2 lg:p-3 md:text-4 ">
                        Synaps Status
                      </th>
                      <th className="p-3 text-center font-bold lg:text-4-5 md:p-2 lg:p-3">
                        Created Date
                      </th>
                      <th className="p-3 text-center font-bold lg:text-4-5 md:p-2 lg:p-3">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  {/* Table body  */}
                  {userList.length > 0 && (
                    <tbody>
                      {userList?.map((sub: any, index: any) => (
                        <tr
                          key={index}
                          className="border-b-2 border-[#43425C] last:border-0"
                        >
                          <td className="text-center">
                            <Image
                              src={sub?.profile_pic}
                              alt="ProfileIcon"
                              className="rounded-lg ml-3"
                              width={30}
                              height={30}
                            />
                          </td>
                          <td className="p-4 text-left md:p-2 lg:p-4 md:py-3 flex items-center gap-1">
                            {sub?.name}
                          </td>
                          <td className="p-4 text-center md:p-2 lg:p-4 md:py-3 ">
                            {sub?.user_name}
                          </td>

                          <td className="p-4 text-center  md:p-2 lg:p-4 md:py-3 ">
                            {sub?.creator_status == 2
                              ? "Pending"
                              : sub?.creator_status == 6
                                ? "Approve"
                                : sub?.creator_status == 5
                                  ? "Rejected"
                                  : ""}
                          </td>
                          <td className="p-4 text-center md:p-2 lg:p-4 md:py-3 ">
                            {moment(sub?.createAt).format("DD-MM-YYYY")}
                          </td>
                          <td className="text-center ">
                            {sub?.creator_status == 6 ? (
                              <div className="flex gap-2 items-center justify-center">
                                <button
                                  className="px-4 py-1 rounded-2 bg-primary font-bold"
                                  onClick={() => updateStatus(3, sub.id)}
                                >
                                  <p className="md:hidden xl:block">Accept</p>
                                  <p className="md:block xl:hidden">
                                    <LuBellOff fontSize="22px" />
                                  </p>
                                </button>

                                <button
                                  className="px-4 py-1 rounded-2 bg-[#FFFFFF1A] font-bold"
                                  onClick={() => updateStatus(5, sub.id)}
                                >
                                  <p className="md:hidden xl:block">Reject</p>
                                  <p className="md:block xl:hidden">
                                    <FaBan fontSize="22px" />
                                  </p>
                                </button>
                              </div>
                            ) : (
                              "-"
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  )}
                </table>
                {userList.length == 0 && (
                  <div className="text-white flex items-center justify-center w-full h-[60vh] bg-[rgba(107,107,107,0.21)]">
                    No Data Found !!
                  </div>
                )}
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
