import toast from "react-hot-toast";
import { removeCurrentUser } from "./Constant";

export const CheckResponse = (response: any) => {
  let newResponse: any = {
    code: "",
    success: false,
    data: null,
    message: "",
    errorMessages: [],
    pagination: null,
  };
  try {
    const { data } = response;
    if (
      data.status_code === 200 ||
      data.status_code === 201 ||
      data.status_code === 204 ||
      data.status_code === 404
    ) {
      newResponse = {
        code: data.status_code,
        success: true,
        data: data || null,
        message: data.message,
        errorMessages: [],
      };
    } else if (data.status_code == 409) {
      newResponse = {
        code: data.status_code,
        success: false,
        data: null,
        message: data.message,
        errorMessages: data.message,
      };
    } else {
      toast.error(data?.message, {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      if (data?.error?.message == "Invalid Token") {
        removeCurrentUser();
        window.location.href = "/";
      }
      newResponse = {
        code: data.status_code,
        success: false,
        data: null,
        message: data?.message,
        errorMessages: data?.msg,
      };
    }
  } catch (error) {
    if (response?.response?.status == 400) {
      toast.error(response?.response?.data?.message, {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else if (response?.response?.status == 409) {
      toast.error(response?.response?.data?.message, {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else {
      toast.error("Internal Server error, please try after sometime!", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  }

  return newResponse;
};
