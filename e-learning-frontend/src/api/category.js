import { axiosConfig } from "./config";
export const getAllCategories = () => axiosConfig.get("/categories");
