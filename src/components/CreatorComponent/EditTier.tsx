import React from "react";
import CloseIcon from "src/assets/svg/closeIcon.svg";
import Image from "../Image/image";
import { useFormik } from "formik";

const EditTier = ({ closeModal, isTierEdit, tierDetail }: any) => {
  const formik: any = useFormik({
    initialValues: {
      tier_cost: tierDetail?.amount ?? "",
    },

    enableReinitialize: true,
    onSubmit: async (values: any) => {},
  });
  return (
    <div
      id="default-modal"
      className="fixed inset-0 z-50 flex justify-center items-center w-full h-screen bg-black bg-opacity-80 flex-col"
      aria-hidden={!isTierEdit}
    >
      <div className="flex justify-end max-w-md mb-2 w-full">
        <button onClick={closeModal}>
          <Image src={CloseIcon} alt="close icon" />
        </button>
      </div>
      <div className="relative px-5 pt-5 w-full max-w-md max-h-full bg-[#252528] rounded-3 text-white">
        <form>
          <div className="mb-[10px]">
            <p className="font-bold text-5 mb-2">{tierDetail.name}</p>
            <input
              name="tier_cost"
              autoComplete="off"
              type="text"
              className="bg-[#3B3B3C] text-white text-sm rounded-lg w-full p-2.5  dark:placeholder-gray-400  outline-none"
              value={formik.values.tier_cost}
            />
          </div>

          <p className="font-bold text-5 mb-2">Features</p>
          {tierDetail.includes.map((item: any, index: number) => {
            return (
              <input
               key={index}
                autoComplete="off"
                type="text"
                className="bg-[#3B3B3C] text-white text-sm rounded-lg w-full p-2.5  dark:placeholder-gray-400  outline-none mb-[10px]"
                value={item}
              />
            );
          })}
          <div className="w-[100%] flex justify-center  gap-5  xs:px-2 mb-[20px] mt-[15px]">
            <button
              type="button"
              className=" text-white bg-[#333334]  font-bold rounded-lg text-sm px-5 py-2.5 s xs:w-[50%] 2xl:w-[140px] 3xl:w-[200px]"
              onClick={() => closeModal()}
            >
              Cancel
            </button>
            <button
              form="my-form"
              type="submit"
              className=" text-white bg-purple font-bold rounded-lg text-sm px-5 py-2.5 mr-3 xs:w-[50%] 2xl:w-[140px] 3xl:w-[200px]"
              onClick={() => closeModal()}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTier;
