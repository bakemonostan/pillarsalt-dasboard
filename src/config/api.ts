import axios, { InternalAxiosRequestConfig } from "axios";

const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  const auth = localStorage.getItem("auth");
  const token = JSON.parse(auth ?? "{}");
  if (auth) {
    config.headers["Authorization"] = `Bearer ${token.state.token}`;
  }
  return config;
};

export const authApi = axios.create({
  baseURL: "http://pillarsaltsolutions.com/api",
});

export const merchantApi = axios.create({
  baseURL: "http://merchant.pillarsaltsolutions.com/api/",
});

merchantApi.interceptors.request.use(onRequest);
