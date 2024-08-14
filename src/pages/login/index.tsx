import React, { useEffect, useState } from "react";
import Image from "src/components/Image/image";
import GuestLayout from "src/layout/GuestLayout";
import Logo from "/src/assets/svg/layoutlogo.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { loginAttempt } from "src/store/actions/auth";
import { useRouter } from "next/router";
import { ROUTES } from "src/utils/routes";
import { getCurrentUser } from "src/utils/Constant";
import { ButtonSpinnerLoader } from "src/loaders/Loader";
const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
const Login = () => {
  const [show, setShow] = useState<boolean>(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const authDetail = useSelector((state: any) => state.auth);
  const formik: any = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      dispatch(loginAttempt(values));
    },
  });
  useEffect(() => {
    if (authDetail.success) {
      router.push(ROUTES.INTEREST);
    }
  }, [authDetail]);
  return (
    <div className="flex bg-personal-bg bg-no-repeat bg-cover min-h-[100vh]">
      <div className="flex items-center justify-center w-full text-white ">
        <div className="flex items-center justify-center flex-col md:min-w-[546px] p-6 md:bg-[#FFFFFF1A] rounded-3">
          <Image src={Logo} alt="Logo" className="clear-image" />
          <p className="text-5 break-all my-6 text-center">
            Sign in and manage the app from admin panel
          </p>
          <form onSubmit={formik.handleSubmit}>
            <input
              autoComplete="off"
              name="email"
              type="text"
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full md:min-w-[400px] px-4 py-2 text-gray-200 bg-[#FFFFFF1A] rounded-3 focus:outline-none focus:ring-2 placeholder-gray-400 ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : ""
              }`}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            )}
            <div className="my-5 relative">
              <input
                autoComplete="off"
                name="password"
                type={show ? "text" : "password"}
                placeholder="Enter your password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full md:min-w-[400px] px-4 py-2 text-gray-200 bg-[#FFFFFF1A] rounded-3 focus:outline-none focus:ring-2 placeholder-gray-400 ${
                  formik.touched.password && formik.errors.password
                    ? "border-red-500"
                    : ""
                }`}
              />
              <div className="absolute z-10 right-3 top-2">
                <button type="button" onClick={() => setShow(!show)}>
                  {show ? (
                    <LuEye fontSize={"20px"} />
                  ) : (
                    <LuEyeOff fontSize={"20px"} />
                  )}
                </button>
              </div>
            </div>
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm">{formik.errors.password}</p>
            )}
            <div className="flex items-center justify-center">
              <button
                type="submit"
                disabled={authDetail.loading}
                className="bg-primary rounded-3 py-2 md:min-w-[400px] sx: w-full mt-4 text-5 font-medium 2xl:text-4 lg:text-3-75 3xl:text-5"
              >
                {authDetail.loading ? <ButtonSpinnerLoader /> : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
Login.getLayout = function getLayout(page: any) {
  return <GuestLayout>{page}</GuestLayout>;
};
export default Login;
