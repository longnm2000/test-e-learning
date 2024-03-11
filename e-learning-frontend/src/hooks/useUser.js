import { useEffect, useState } from "react";
import { getUserDetail } from "../api/user";

export const useGetUserById = (userId) => {
  const [userDetail, setUserDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const fetchUserDetail = async (id) => {
    try {
      const response = await getUserDetail(id);
      setUserDetail(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserDetail(userId);
  }, []);
  return { userDetail, isLoading, fetchUserDetail };
};
