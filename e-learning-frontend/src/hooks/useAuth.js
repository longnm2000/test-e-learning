import { useState, useEffect } from "react";
import { getLogin } from "../api/auth";

export const useUserToken = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const fetchUser = async () => {
    try {
      const response = await getLogin();
      setUser(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return { user, isLoading };
};
