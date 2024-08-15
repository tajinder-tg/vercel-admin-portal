import React, { useEffect } from "react";
import Image from "src/components/Image/image";
import MediaOne from "src/assets/media-example1.png";
import creatorProfileCover from "src/assets/banner.png";
import ProfileIcon from "src/assets/svg/profiledemo.svg";
import swal from "sweetalert";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetailsAction } from "src/store/actions/user";
import { useRouter } from "next/router";
import { Decrypt } from "src/utils/Constant";
import { updateUserStateAction } from "src/store/actions/creatorRequest";

const Index = () => {
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state: any) => state.user);
  const router = useRouter();
  const { id }: any = router.query;
  const userSubscriptionsData = [
    {
      name: "Abigail Larson",
      tier: "Tier 1",
      totalSpend: "$7.99",
      subscriptionStatus: "Active",
      joiningDate: "19/06/2024",
    },
    {
      name: "Adam Morgan",
      tier: "Tier 1",
      totalSpend: "$14.99",
      subscriptionStatus: "Active",
      joiningDate: "19/06/2024",
    },
    {
      name: "Alex Ferguson",
      tier: "Tier 3",
      totalSpend: "$29.99",
      subscriptionStatus: "Active",
      joiningDate: "19/06/2024",
    },
    {
      name: "Alison K Fenn",
      tier: "Tier 2",
      totalSpend: "$39.99",
      subscriptionStatus: "Active",
      joiningDate: "19/06/2024",
    },
    {
      name: "Alyssa Rodwell",
      tier: "Tier 3",
      totalSpend: "$59.99",
      subscriptionStatus: "Active",
      joiningDate: "19/06/2024",
    },
  ];

  const updateStatus = (value: number) => {
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
          user_id: userDetails?.id,
          status: value,
        };
        response = await dispatch(updateUserStateAction(payload));
        if (!response) {
          swal(`Something went wrong!`, {
            icon: "error",
          });
          return;
        }
        swal(`${value == 3 ? "Accepted" : "Rejected"} successfully`, {
          icon: "success",
        });
      }
    });
  };

  useEffect(() => {
    if (id) {
      let payload = {
        user_id: Decrypt(id),
      };
      dispatch(getUserDetailsAction(payload));
    }
  }, [id]);

  return (
    <div>
      <div className="flex  w-full items-center justify-center mt-[10px] mb-[20px]">
        <div className="flex justify-center items-center px-4 w-full xs:px-0 md:px-4 ">
          <div className=" xs:max-h-[91vh] md:max-h-full relative flex flex-col items-center md:rounded-3 ">
            <div className="w-full">
              <Image
                className="flex w-full top-0 md:rounded-3 h-[200px] object-cover "
                src={creatorProfileCover}
                alt="creatorProfileCover"
              />
            </div>

            <div className="relative w-7/12  h-auto bg-[#FFFFFF1A] rounded-4 backdrop-blur-[11.6px] shadow-[0_4px_30px_rgba(0,0,0,0.1)]  mt-[-3rem] px-2 pt-[65px] pb-[20px] xs:w-11/12  md:w-11/12 2xl:w-10/12 3xl:w-9/12 ">
              <div className="flex flex-col justify-center items-center text-center">
                <div className="h-[100px] w-[100px] rounded-full p-1 mr-4 absolute bg-[#3B3B3C] flex items-center justify-center cursor-pointer top-[-50px] border-2 border-primary">
                  <Image
                    src={userDetails?.profile_pic}
                    alt="avatar"
                    height={98}
                    width={98}
                    className={`rounded-full max-h-[98px] max-w-[98px]`}
                  />
                </div>

                <div>
                  <h1 className="font-bold text-5 md:text-7 text-center text-white leading-natural -tracking-0-6 w-full">
                    {userDetails?.name}
                  </h1>
                  <h2 className="font-medium text-4 md:text-4-5 text-center text-white leading-natural -tracking-0-6 w-full">
                    @AbigailLarson123
                  </h2>
                </div>

                <div className="flex justify-around w-full mt-3 items-center">
                  <div className="flex flex-col items-center">
                    <span className="text-white text-center font-bold text-5">
                      {userDetails?.total_post}
                    </span>
                    <span className="text-white text-center  text-4-5">
                      Posts
                    </span>
                  </div>
                  <div className="flex flex-col items-center ml-3">
                    <span className="text-white text-center font-bold text-5">
                      {userDetails?.total_subscribers}
                    </span>
                    <span className="text-white text-center  text-4-5">
                      Subscribers
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-white text-center font-bold text-5">
                      {userDetails?.total_followers}
                    </span>
                    <span className="text-white text-center text-4-5">
                      Followers
                    </span>
                  </div>
                </div>
                <div className="mt-2 text-white text-center px-4 text-4-5">
                  <p>Important to be nice 😊</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto space-y-4  ml-1 px-4">
        <div className="mb-6">
          <h2 className="text-6 font-bold text-white mb-2">Subscriptions</h2>
          <div className="overflow-auto rounded-3">
            <table className="min-w-full text-white bg-[rgba(107,107,107,0.21)] shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
              {/* Table Head  */}
              <thead className="bg-[rgba(107,107,107,0.21)]">
                <tr>
                  <th className="p-3 text-left font-bold lg:text-4-5 md:p-2 lg:p-3">
                    Name
                  </th>
                  <th className="p-3 text-center font-bold lg:text-4-5 md:p-2 lg:p-3">
                    Tier
                  </th>
                  <th className="p-3 text-center font-bold lg:text-4-5 md:p-2 lg:p-3">
                    Total Spend
                  </th>
                  <th className="p-3 text-center font-bold lg:text-4-5 md:p-2 lg:p-3 md:text-4 ">
                    Subscription Status
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
                    className="border-b border-[#43425C] last:border-0"
                  >
                    <td className="p-4 text-left md:p-2 lg:p-4 md:py-3 flex items-center gap-1">
                      <Image src={ProfileIcon} alt="ProfileIcon" />
                      {sub.name}
                    </td>
                    <td className="p-4 text-center md:p-2 lg:p-4 md:py-3 ">
                      {sub.tier}
                    </td>
                    <td className="p-4 text-center md:p-2 lg:p-4 md:py-3 ">
                      {sub.totalSpend}
                    </td>
                    <td className="p-4 text-center text-[#26C80C] md:p-2 lg:p-4 md:py-3 ">
                      {sub.subscriptionStatus}
                    </td>
                    <td className="p-4 text-center md:p-2 lg:p-4 md:py-3 ">
                      {sub.joiningDate}
                    </td>
                    <td className="text-center ">
                      <div className="flex gap-2 items-center justify-center">
                        <button className="px-2 py-1 rounded-2 bg-primary">
                          <p className="md:hidden xl:block">End Subscription</p>
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
    </div>
  );
};

export default Index;
