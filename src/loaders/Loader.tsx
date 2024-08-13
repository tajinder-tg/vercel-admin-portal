import React from "react";
const loadingData = [...Array(5)].map((key) => ({ id: key }));
const analyticsData = [...Array(4)].map((key) => ({ id: key }));
const messageData = [
  {
    id: 1,
    sender: "other",
  },
  {
    id: 2,
    sender: "self",
  },
  {
    id: 3,
    sender: "other",
  },
  {
    id: 4,
    sender: "self",
  },
];

export const PostLoader = () => {
  return (
    <>
      {loadingData.map((index: any) => (
        <div
          key={index}
          className="flex flex-col space-y-4 p-5 bg-[#FFFFFF1A] rounded-2 mx-4 mb-4"
        >
          <div className="skeleton-animation flex items-center gap-3 justify-between">
            <div className="flex items-center gap-3">
              <div className="h-14 w-14 bg-gray-300 rounded-full"></div>
              <div className="h-4 bg-gray-300 rounded w-[200px]"></div>
            </div>
            <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
          </div>
          <div className="skeleton-animation">
            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
          </div>
          <div className="skeleton-animation">
            <div className="h-64 bg-gray-300 rounded"></div>
          </div>

          <hr className="w-full border-gray-500 " />
          <div className="flex items-center justify-between skeleton-animation">
            <div className="h-4 bg-gray-300 w-[80px] rounded"></div>
            <div className="h-4 bg-gray-300 w-[80px] rounded"></div>
            <div className="h-4 bg-gray-300 w-[80px] rounded"></div>
            <div className="h-4 bg-gray-300 w-[80px] rounded"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export const GeneralLoader = () => {
  return (
    <>
      {loadingData.map((index: any) => (
        <div key={index} className="p-2 bg-[#FFFFFF1A] mb-2 rounded-2">
          <div className="skeleton-animation flex items-center gap-3 justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
              <div className="h-4 bg-gray-300 rounded w-[200px]"></div>
            </div>
            <div className="h-4 w-10 bg-gray-300 rounded"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export const DashboardLoader = () => {
  return (
    <>
      {/* <div className="flex items-center justify-between text-white mx-4 mb-2 rounded-2 font-bold bg-[#FFFFFF1A] p-4">
        <p>Name</p>
        <p>Tier</p>
        <p>Total Spend</p>
        <p>Subscription Status</p>
        <p>Joining Date</p>
      </div> */}
      {loadingData.map((index: any) => (
        <div key={index} className="p-2 bg-[#FFFFFF1A] mb-2 rounded-2 mx-4">
          <div className="skeleton-animation flex items-center gap-3 justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
              <div className="h-4 bg-gray-300 rounded w-[200px]"></div>
            </div>
            <div className="h-4 w-full bg-gray-300 rounded"></div>
            <div className="h-4 w-full bg-gray-300 rounded"></div>
            <div className="h-4 w-full bg-gray-300 rounded"></div>
            <div className="h-4 w-full bg-gray-300 rounded"></div>
          </div>
        </div>
      ))}
    </>
  );
};
export const MobileDashboardLoader = () => {
  return (
    <>
      {loadingData.map((index: any) => (
        <div key={index} className="p-2  mb-2 rounded-2 mx-2 bg-[#FFFFFF1A] ">
          <div className="skeleton-animation flex items-center gap-3 flex-col">
            <div className="flex items-center justify-between gap-4 w-full">
              <div className="flex items-center gap-3 justify-between ">
                <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
                <div className="h-4 bg-gray-300 rounded w-[100px]"></div>
              </div>
              <div className="h-4 w-1/3 bg-gray-300 rounded"></div>
            </div>
            <div className="flex items-center justify-between gap-4 w-full">
              <div className="h-4 w-full bg-gray-300 rounded"></div>
              <div className="h-4 w-full bg-gray-300 rounded"></div>
              <div className="h-4 w-full bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export const AnalyticsLoader = () => {
  return (
    <>
      <div className="grid grid-cols-4 sm:grid-cols-2 gap-4  xl:grid-cols-4 xs:grid-cols-2 skeleton-animation">
        {analyticsData.map((data, index) => (
          <div
            key={index}
            className=" bg-gray-700 rounded-3 p-4 flex flex-col justify-between xs:p-2 md:p-4 h-20"
          ></div>
        ))}
      </div>
      <div className="grid grid-cols-2 text-white mt-5 gap-4 xs:grid-cols-1 xl:grid-cols-2 skeleton-animation">
        <div className=" bg-gray-700 rounded-3 p-4 flex flex-col justify-between xs:p-2 md:p-4 h-[40vh]"></div>
        <div className=" bg-gray-700 rounded-3 p-4 flex flex-col justify-between xs:p-2 md:p-4 h-[40vh]"></div>
      </div>
      <div className="xs:h-14 md:hidden"></div>
    </>
  );
};
export const NotificationLoader = () => {
  return (
    <>
      {loadingData.map((item, index) => (
        <div key={index} className="p-2 bg-[#FFFFFF1A] mb-2 rounded-2">
          <div className="skeleton-animation flex items-center gap-3 justify-between">
            <div className="flex items-center gap-3 w-full">
              <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export const ChatListLoader = () => {
  return (
    <div className="xs:px-4 md:px-0">
      {loadingData.map((index: any) => {
        return (
          <div key={index} className="p-2 bg-[#FFFFFF1A] mb-2 rounded-2">
            <div className="skeleton-animation flex items-center gap-3 justify-between">
              <div className="flex items-center gap-3 w-full">
                <div className="xs:h-8 xs:w-9  md:h-10 md:w-10 bg-gray-300 rounded-full"></div>
                <div className="flex flex-col w-[90%] gap-2">
                  <div className="h-3 bg-gray-300 rounded w-[40%]"></div>
                  <div className="h-3 bg-gray-300 rounded w-[85%]"></div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const UserMemberListLoader = () => {
  return (
    <div className="mt-5">
      {loadingData.map((index: any) => {
        return (
          <div key={index} className="p-2 bg-[#FFFFFF1A] mb-3 rounded-2">
            <div className="skeleton-animation flex items-center gap-3 justify-between">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-5 w-[90%]">
                  <div className="xs:h-8 xs:w-10  md:h-10 md:w-11 bg-gray-300 rounded-full"></div>
                  <div className="flex flex-col gap-2 w-full">
                    <div className="h-3 bg-gray-300 rounded w-[40%]"></div>
                    <div className="h-3 bg-gray-300 rounded w-[85%]"></div>
                  </div>
                </div>
                <div className="h-5 w-5 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const SpinnerLoader = () => {
  return (
    <div role="status" className="flex justify-center items-center h-[300px]">
      <svg
        aria-hidden="true"
        className="inline w-10 h-10 text-gray-200 animate-spin dark:purple fill-purple"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export const ButtonSpinnerLoader = () => {
  return (
    <div role="status" className="flex justify-center items-center">
      <svg
        aria-hidden="true"
        className="inline w-[27px] h-[27px] text-gray-200 animate-spin dark:purple fill-purple"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export const ChatBodyLoader = () => {
  return (
    <div className="mt-3">
      {messageData.map((item, index) => {
        return (
          <div
            key={index}
            className={`flex flex-col ${
              item.sender === "self" ? "items-end" : "items-start"
            }`}
          >
            <div
              className={` rounded-tl-lg rounded-tr-lg font-bold break-all ${
                item.sender === "self" ? "rounded-bl-lg" : "rounded-br-lg"
              } w-2/5`}
            >
              <div
                className={` h-9 skeleton-animation  p-2 bg-[#f6f3f342] mb-2  rounded-tl-lg rounded-tr-lg  ${
                  item.sender === "self" ? "rounded-bl-lg" : "rounded-br-lg"
                } `}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const MonetizationLoader = () => {
  return (
    <>
      {loadingData.slice(0, 4).map((index: any) => {
        return (
          <div key={index} className="p-5 bg-[#FFFFFF1A] mb-3 rounded-2 w-full">
            <div className="skeleton-animation flex items-center gap-3 justify-between">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-5 w-[90%]">
                  <div className="flex flex-col gap-2 w-full">
                    <div className="h-3 bg-gray-300 rounded w-[40%]"></div>
                    <div className="h-3 bg-gray-300 rounded w-[60%]"></div>
                  </div>
                </div>
                <div className="h-5 w-5 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export const InterestLoader = () => {
  return (
    <>
      <div className="flex gap-4 flex-wrap justify-center">
        {loadingData.map((index: any) => (
          <div key={index} className="p-2 bg-[#FFFFFF1A] mb-2 rounded-2">
            <div className="skeleton-animation flex items-center gap-3 justify-between">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
              </div>
              <div className="h-4 w-10 bg-gray-300 rounded "></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
