
import axiosApi from "@/lib/axios";

export const apiFetchDashboard = async () => {
  try {
    const apiGet = await axiosApi.get("/api/dashboard");
    return apiGet.data;
    
  } catch (error) {
    console.error("Error get data: ", error);
    throw error;
  }
};

export const apiFetchChart = async () => {
  try {
    const apiGet = await axiosApi.get("/api/trans");
    return apiGet.data;

  } catch (error) {
    console.error("Error get data: ", error);
    throw error;
  }
};
