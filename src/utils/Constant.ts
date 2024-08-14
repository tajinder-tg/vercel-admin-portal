import axios from "axios";
import CryptoJS from "crypto-js";
import authConfig from "./authConfig";
const cryptoSecret = "ZG9uYXR1egM==";
export const constants = {
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
};
export function Encrypt(values: any) {
  const encJson = CryptoJS.AES.encrypt(
    JSON.stringify(values),
    cryptoSecret
  ).toString();
  const encData = CryptoJS.enc.Base64.stringify(
    CryptoJS.enc.Utf8.parse(encJson)
  );
  return encData;
}
export function Decrypt(values: string | null) {
  try {
    const decData = CryptoJS.enc.Base64.parse(
      values == null ? "" : values
    )?.toString(CryptoJS.enc.Utf8);
    const bytes = CryptoJS.AES.decrypt(decData, cryptoSecret).toString(
      CryptoJS.enc.Utf8
    );
    return bytes ? JSON.parse(bytes) : {};
  } catch (err) {
    console.log(err, "err");
    // removeCurrentUser();
    // window.location.href = "/";
  }
}
export const setCurrentUser = (data: any) => {
  let encryptedToken = Encrypt(data?.token);
  localStorage.setItem(authConfig.storageTokenKeyName, encryptedToken);
};
export const setTemporaryUser = (data: any) => {
  let encryptedToken = Encrypt(data.token);
  localStorage.setItem(authConfig.storageTempToken, encryptedToken);
};
export const removeTempUser = () => {
  localStorage.removeItem(authConfig.storageTempToken);
};
export const removeCurrentUser = () => {
  localStorage.removeItem(authConfig.storageTokenKeyName);
  localStorage.removeItem(authConfig.rolesKey);
  localStorage.removeItem(authConfig.userId);
};
export const getCurrentUser = () => {
  let token = localStorage.getItem(authConfig.storageTokenKeyName) || null;
  let decryptedToken = Decrypt(token);
  return decryptedToken
    ? Object.keys(decryptedToken).length > 0
      ? decryptedToken
      : null || null
    : null;
};
export const getTempUser = () => {
  let token = localStorage.getItem(authConfig.storageTempToken) || null;
  let decryptedToken = Decrypt(token);
  return decryptedToken
    ? Object.keys(decryptedToken).length > 0
      ? decryptedToken
      : null || null
    : null;
};
const axiosInstance = axios.create({
  baseURL: constants.apiBaseUrl,
});
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = getCurrentUser();
    const tempToken = getTempUser();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else if (tempToken) {
      config.headers.Authorization = `Bearer ${tempToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Redirect to login page on 401 Unauthorized error
      // window.location.href = "/"; // Adjust the path according to your routing
      // removeTempUser();
      // removeCurrentUser();
    }
    return Promise.reject(error);
  }
);
export const get = async (url: any, params?: any) => {
  try {
    const response = await axiosInstance.get(url, { params });
    return response;
  } catch (error) {
    return error ?? "";
  }
};
export const postImage = async (url: string, formData: FormData) => {
  try {
    const response = await axiosInstance.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};
export const post = async (url: string, data: any) => {
  try {
    const response = await axiosInstance.post(url, data);
    return response;
  } catch (error) {
    return error;
  }
};
export const postWithoutToken = async (url: string, data: any) => {
  const encryptedData = Encrypt(data);
  return await axios({
    method: "post",
    url: url,
    data: data,
  })
    .then((response) => response)
    .catch((err) => err.response);
};
export const put = async (url: string, data: any) => {
  try {
    const response = await axiosInstance.put(url, data);
    return response;
  } catch (error) {
    return error;
  }
};
