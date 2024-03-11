import { axiosConfig } from "./config";

export const getLogin = () => axiosConfig.get("/auth/google");
