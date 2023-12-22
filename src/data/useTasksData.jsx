import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/Authentication";

const useTasksData = () => {
  const {
    isLoading,
    error,
    data: tasks,
    refetch,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      try {
        const response = await axios.get(`http://localhost:3000/tasks`);
        return response.data.data || null;
      } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
      }
    },
  });

  return { isLoading, error, tasks, refetch };
};

export default useTasksData;
