import { axiosInstance } from "./config";

export const getUserDetail = (userId) => axiosInstance.get(`/users/${userId}`);
