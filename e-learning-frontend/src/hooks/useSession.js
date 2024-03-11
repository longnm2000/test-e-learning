import { useState, useEffect } from "react";

import { getCountSessionsByCourseId } from "../api/session";

export const useCountSessionsByCourseId = (courseId) => {
  const [sessions, setSessions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchAllCoursesByCourseId = async (id) => {
    try {
      const response = await getCountSessionsByCourseId(id);
      setSessions(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchAllCoursesByCourseId(courseId);
  }, []);
  return { sessions, isLoading, fetchAllCoursesByCourseId };
};
