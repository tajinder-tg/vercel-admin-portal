import React, { useEffect, useState } from "react";
import CloseIcon from "src/assets/svg/closeIcon.svg";
import Image from "../Image/image";
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

const loginSchema = Yup.object().shape({
  icon: Yup.string().required("Icon is required"),
  name: Yup.string()
    .max(10, "Maximum limit reached")
    .required("Name is required"),
});
const AddEditInterest = ({ isModalOpen, closeModal, interestDetail }: any) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const formik: any = useFormik({
    initialValues: {
      icon: interestDetail?.logo ?? "",
      name: interestDetail?.name ?? "",
    },
    validationSchema: loginSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      let data = {
        name: values?.name,
        logo: values?.icon,
      };
      if (!interestDetail) {
        setLoading(true);
        let response: any = await post(ApiUrl.addInterest, data);
        let checkedResponse = await CheckResponse(response);
        if (
          checkedResponse?.data?.status_code == 200 ||
          checkedResponse?.data?.status_code == 201
        ) {
          dispatch(getInterestList());
          closeModal();
        } else {
          setLoading(false);
        }
      } else {
        let data = {
          id: interestDetail?.id,
          name: values?.name,
          logo: values?.icon,
        };
        setLoading(true);
        let response: any = await put(ApiUrl.editInterest, data);
        let checkedResponse = await CheckResponse(response);
        if (
          checkedResponse?.data?.status_code == 200 ||
          checkedResponse?.data?.status_code == 201
        ) {
          dispatch(getInterestList());
          closeModal();
        } else {
          setLoading(false);
        }
      }
    },
  });
  const handleImageSelection = async (event: any) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    let response: any = await dispatch(uploadProfile(formData));
    if (response?.data?.file) {
      formik.setFieldValue("icon", `${response?.data?.file}`);
    }
  };

  return (
    <div
      id="default-modal"
      className="fixed inset-0 z-50 flex justify-center items-center w-full h-screen bg-black bg-opacity-80 flex-col"
      aria-hidden={!isModalOpen}
    >
      <div className="flex justify-end max-w-xl mb-2 w-full">
        <button onClick={closeModal}>
          <Image src={CloseIcon} alt="close icon" />
        </button>
      </div>
      <div className="relative p-4 w-full max-w-xl max-h-full bg-[#252528] rounded-3 text-white">
        <div className="text-4-5 font-bold">
          {interestDetail ? "Edit Interest" : "Add Interest"}
        </div>
        <div>
          <form onSubmit={formik.handleSubmit}>
            <div className="my-5 relative">
              <input
                autoComplete="off"
                name="name"
                placeholder="Enter your Interest name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full md:min-w-[400px] px-4 py-2 text-gray-200 bg-[#FFFFFF1A] rounded-3 focus:outline-none focus:ring-2 placeholder-gray-400 ${
                  formik.touched.name && formik.errors.name
                    ? "border-red-500"
                    : ""
                }`}
              />
            </div>
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm">{formik.errors.name}</p>
            )}
            {formik.values.icon ? (
              <div className="relative mt-3">
                <Image
                  src={formik.values.icon}
                  alt="icon"
                  width={50}
                  height={50}
                />
                <div className="absolute top-0 left-9">
                  <button
                    type="button"
                    onClick={() => formik.setFieldValue("icon", "")}
                  >
                    <IoClose />
                  </button>
                </div>
              </div>
            ) : (
              <input
                autoComplete="off"
                name="icon"
                type="file"
                placeholder="Select your icon"
                //   value={formik.values.icon}
                accept="image/*" // This ensures only image files can be selected
                onChange={handleImageSelection}
                onBlur={formik.handleBlur}
                className={`w-full md:min-w-[400px] px-4 py-2 text-gray-200 bg-[#FFFFFF1A] rounded-3 focus:outline-none focus:ring-2 placeholder-gray-400 ${
                  formik.touched.icon && formik.errors.icon
                    ? "border-red-500"
                    : ""
                }`}
              />
            )}
            {formik.touched.icon && formik.errors.icon && (
              <p className="text-red-500 text-sm">{formik.errors.icon}</p>
            )}

            <div className="flex items-center justify-center">
              <button
                type="submit"
                // disabled={authDetail.loading}
                className="bg-primary rounded-3 py-1 md:w-[250px] sx: w-full mt-4 text-5 font-medium 2xl:text-4 lg:text-3-75 3xl:text-5"
              >
                {/* {authDetail.loading ? <ButtonSpinnerLoader /> : "Login"} */}
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEditInterest;
