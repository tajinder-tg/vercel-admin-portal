import React, { useEffect, useState } from "react";
import CloseIcon from "src/assets/svg/closeIcon.svg";
import Image from "./Image/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { uploadProfile } from "src/store/actions/user-profile";
import { IoClose } from "react-icons/io5";
import { post, put } from "src/utils/Constant";
import { ApiUrl } from "src/Api";
import { getInterestList } from "src/store/actions/interest";
import toast from "react-hot-toast";
import { CheckResponse } from "src/utils/CheckResponse";

const BanModal = ({ closeModal, isBanModal, selectedName }: any) => {
  return (
    <div
      id="default-modal"
      className="fixed inset-0 z-50 flex justify-center items-center w-full h-screen bg-black bg-opacity-80 flex-col"
      aria-hidden={!isBanModal}
    >
      <div className="flex justify-end max-w-md mb-2 w-full">
        <button onClick={closeModal}>
          <Image src={CloseIcon} alt="close icon" />
        </button>
      </div>
      <div className="relative px-5 pt-5 w-full max-w-md max-h-full bg-[#252528] rounded-3 text-white">
        <div className="text-4-5 font-bold text-center mb-[20px]">
          {`Do You want to Ban ${selectedName}`}
        </div>
        <div className="w-[100%] flex justify-center  gap-5  xs:px-2 mb-[20px]">
          <button
            type="button"
            className=" text-white bg-[#333334]  font-bold rounded-lg text-sm px-5 py-2.5 s xs:w-[50%] 2xl:w-[140px] 3xl:w-[200px]"
            onClick={()=>closeModal()}
          >
            Cancel
          </button>
          <button
            form="my-form"
            type="submit"
            className=" text-white bg-purple font-bold rounded-lg text-sm px-5 py-2.5 mr-3 xs:w-[50%] 2xl:w-[140px] 3xl:w-[200px]"
            onClick={()=>closeModal()}
          >
            Ban User
          </button>
        </div>
      </div>
    </div>
  );
};

export default BanModal;
