import { useState, useEffect } from "react";
import {
  getAllCoursesByCategoryId,
  getAllCoursesByUserId,
  getCourseCompletion,
  getAllCourses,
} from "../api/course";

export const useAllCourses = (categoryId, search) => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchAllCourses = async (id, search) => {
    try {
      const response = await getAllCourses(id, search);
      setCourses(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchAllCourses(categoryId, search);
  }, [categoryId, search]);
  return { courses, isLoading, fetchAllCourses };
};

export const useAllCoursesByCategoryId = (categoryId) => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchAllCoursesByCategoryId = async (id) => {
    try {
      const response = await getAllCoursesByCategoryId(id);
      setCourses(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchAllCoursesByCategoryId(categoryId);
  }, []);
  return { courses, isLoading, fetchAllCoursesByCategoryId };
};

export const useAllCoursesByUserId = (userId) => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchAllCoursesByUserId = async (id) => {
    try {
      const response = await getAllCoursesByUserId(id);
      setCourses(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchAllCoursesByUserId(userId);
  }, []);
  return { courses, isLoading, fetchAllCoursesByUserId };
};

export const useCourseCompletion = (courseId) => {
  const [percent, setPercent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const fetchCourseCompletion = async (id) => {
    try {
      const response = await getCourseCompletion(id);
      setPercent(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchCourseCompletion(courseId);
  }, []);
  return { percent, isLoading, fetchCourseCompletion };
};
