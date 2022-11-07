import axios from "axios";
import {BASE_URL,X_ACCESS_TOKEN} from "../constants";

let APIKit = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'x-access-token': X_ACCESS_TOKEN,
    'Content-Type': 'application/json',
  },
});

export const setClientToken = (token: string) => {
  APIKit.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};

export default APIKit;