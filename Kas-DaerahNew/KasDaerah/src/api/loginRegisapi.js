import axiosApi from "@/lib/axios";

export const registerApi = async (userData) =>{
    try {
      const response = await axiosApi.post("/api/register", userData);
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      return {
        success: true,
        error: error.response?.data?.message || "Server Error"
      }
    }
  }

  export const loginApi = async (credentials) => {
    try {
      const response = await axiosApi.post("/api/login", credentials);
      const token = response.data.access_token;
      
      localStorage.setItem('access_token', token);

      return {
        success: true,
        data: response.data
      };
    } catch (error) {

      return {
        success: false,
        error: error.response?.data?.message || "Invalid credentials"
      };
    }
  };