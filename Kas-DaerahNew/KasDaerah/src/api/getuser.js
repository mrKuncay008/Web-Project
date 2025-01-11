import axiosApi from "@/lib/axios";

export const apiFetchUser = async () => {
    try {
      const token = localStorage.getItem('access_token');
      console.log("Token", token)
      
      if (!token) {
        throw new Error('Token tidak ditemukan');
      }
    const response = await axiosApi.get('/api/user', {
        headers: {
        Authorization: `Bearer ${token}` 
    }});

    const userData = response.data;
    
    return userData;

    } catch (error) {
        console.error("Error fetching user data:", error);
        if (error.response) {
           
            console.error("Server Error:", error.response.data);
          } else if (error.request) {

            console.error("No response received:", error.request);
          } else {
          
            console.error("Error setting up the request:", error.message);
          }
        
        return null;
      }
}