import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { toast } from "react-toastify";

const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  const auth = sessionStorage.getItem("auth");
  const token = JSON.parse(auth ?? "{}");
  if (auth) {
    config.headers["Authorization"] = `Bearer ${token.state.token}`;
  }
  return config;
};

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response && error.response >= 400 && error.response < 500;

  if (!expectedError) {
    //console.log('Logging the error', error);
    toast.error("An unexpected error occured!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  return Promise.reject(error);
});

export const authApi = axios.create({
  baseURL: "https://pillarsaltsolutions.com/api",
});

export const merchantApi = axios.create({
  baseURL: "https://merchant.pillarsaltsolutions.com/api/",
});

merchantApi.interceptors.request.use(onRequest);
export default {
  get: axios.get,
  put: axios.put,
  post: axios.post,
  delete: axios.delete,
};
