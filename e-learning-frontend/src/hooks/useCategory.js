import { useState, useEffect } from "react";
import { getAllCategories } from "../api/category";

export const useGetAllCategories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchAllCategories = async () => {
    try {
      const response = await getAllCategories();
      setCategories(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchAllCategories();
  }, []);
  return { categories, isLoading, fetchAllCategories };
};
