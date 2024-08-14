import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "src/components/Image/image";
import { getInterestList } from "src/store/actions/interest";
import moment from "moment";
import { MdDeleteOutline } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import Tooltip from "src/components/Tooltip";
import AddEditInterest from "src/components/Interest/AddEditInterest";
import { DashboardLoader } from "src/loaders/Loader";

const Interest = () => {
  const [interest, setInterest] = useState<any>([]);
  const interestList = useSelector((state: any) => state.interest);
  const { isInterestList } = interestList;
  const [isInterestAddEdit, setIsInterestAddEdit] = useState<boolean>(false);
  const [interestDetail, setInterestDetail] = useState<any>(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInterestList());
  }, []);

  useEffect(() => {
    setInterest(interestList.interestList);
  }, [interestList]);

  const handleAddInterest = () => {
    setIsInterestAddEdit(true);
  };
  const handleCloseModal = () => {
    setIsInterestAddEdit(false);
    setInterestDetail(null);
  };
  const handleEditInterest = (interestDetail: any) => {
    setIsInterestAddEdit(true);
    setInterestDetail(interestDetail);
  };
  return (
    <>
      {isInterestAddEdit && (
        <AddEditInterest
          isModalOpen={isInterestAddEdit}
          closeModal={handleCloseModal}
          interestDetail={interestDetail}
        />
      )}
      <div className="flex flex-col  mt-3">
        {/* Desktop Table  */}
        {isInterestList ? (
          <DashboardLoader />
        ) : (
          <div className="flex-1 overflow-auto space-y-4  ml-1 px-4">
            <div className="flex items-center justify-between">
              <div></div>
              <div>
                <button
                  onClick={handleAddInterest}
                  type="button"
                  className=" text-white bg-primary rounded py-1 px-6 sx: w-full mt-4 text-4 font-medium 2xl:text-4 lg:text-3-75 3xl:text-4"
                >
                  Add
                </button>
              </div>
            </div>
            <div className="mb-6">
              <div className="overflow-auto rounded-3">
                <table className="min-w-full text-white bg-[rgba(107,107,107,0.21)] shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
                  {/* Table Head  */}
                  <thead className="bg-[rgba(107,107,107,0.21)]">
                    <tr>
                      <th className="p-3 text-left font-bold lg:text-4-5 md:p-2 lg:p-3">
                        Name
                      </th>
                      <th className="p-3 text-center font-bold lg:text-4-5 md:p-2 lg:p-3">
                        Icon
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
                  <tbody>
                    {interest?.map((sub: any, index: number) => (
                      <tr
                        key={index}
                        className="border-b border-[#43425C] last:border-0"
                      >
                        <td className="p-4 text-left md:p-2 lg:p-4 md:py-3 flex items-center gap-1">
                          {sub.name}
                        </td>
                        <td className="p-4 text-center md:p-2 lg:p-4 md:py-3 items-center">
                          <div className="flex items-center justify-center">
                            <Image
                              src={sub?.logo}
                              alt="ProfileIcon"
                              width={20}
                              height={20}
                            />
                          </div>
                        </td>
                        <td className="p-4 text-center md:p-2 lg:p-4 md:py-3 ">
                          {moment(sub.createAt).format("DD-MM-YYYY")}
                        </td>
                        <td className="p-4 text-center  md:p-2 lg:p-4 md:py-3 ">
                          <div className="flex items-center justify-center gap-3">
                            <Tooltip title="Edit">
                              <button
                                type="button"
                                className="cursor-pointer"
                                onClick={() => handleEditInterest(sub)}
                              >
                                <TbEdit fontSize={20} />
                              </button>
                            </Tooltip>
                            <Tooltip title="Delete">
                              <button type="button" className="cursor-pointer">
                                <MdDeleteOutline
                                  fontSize={20}
                                  fontWeight={400}
                                />
                              </button>
                            </Tooltip>
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
    </>
  );
};

export default Interest;
