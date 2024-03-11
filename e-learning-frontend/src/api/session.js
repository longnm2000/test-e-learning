import { axiosConfig } from "./config";

export const getCountSessionsByCourseId = (courseId) =>
  axiosConfig.get(`/courses/${courseId}`);
