import { axiosConfig } from "./config";

export const getAllCoursesByCategoryId = (categoryId) =>
  axiosConfig.get(`/courses/${categoryId}`);

export const getAllCourses = (categoryId, search) => {
  console.log(categoryId, search);
  if (categoryId && search) {
    return axiosConfig.get(
      `/courses?category_id=${categoryId}&&search=${search}`
    );
  }
  if (categoryId) {
    return axiosConfig.get(`/courses/${categoryId}`);
  }
  if (search) {
    return axiosConfig.get(`/courses?search=${search}`);
  }
  return axiosConfig.get("/courses");
};

export const getAllCoursesByUserId = (userId) =>
  axiosConfig.get(`/partici?id=${userId}`);

export const getCourseCompletion = (courseId) =>
  axiosConfig.get(`/course/session/complete/${courseId}`);
