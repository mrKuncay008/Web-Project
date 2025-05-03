import axiosApi from "@/lib/axios";

export const apiFetchIncome = async () => {
    try {
      const apiGet = await axiosApi.get('/api/income');

      const fetchIncome = apiGet.data.table_income.map((item) => ({
        id: item.id,
        name: item.name,
        Date: item.date_colmn,
        total: item.total,
      }));
  
      return fetchIncome;
  
    } catch (error) {
      console.error('Error get data: ', error);
      throw error;
    }
  };

  export const postApi = async (data) => {
    try {
      const response = await axiosApi.post("/api/income", data);
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || "Server Error"
      };
    };
  };

  export const apiDeleteIncome = async (id) => {
    if (!id) {
      console.error("Invalid ID");
      return;
    }
    
    try {
      const apiDelete = await axiosApi.delete(`/api/income/${id}`);
      return apiDelete.data;
  
    } catch (error) {
      console.error('Error get data: ', error);
      throw error;
    }
  }