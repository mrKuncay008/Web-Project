import axiosApi from "@/lib/axios";

export const apiFetchOutcome = async () => {
    try {
      const apiGet = await axiosApi.get('/api/outcome');
  
      const fetchIncome = apiGet.data.table_outcome.map((item) => ({
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



  export const apiDeleteOutcome = async (id) => {
    if (!id) {
      console.error("Invalid ID");
      return;
    }
    
    try {
      const apiDelete = await axiosApi.delete(`/api/outcome/${id}`);
      return apiDelete.data;
  
    } catch (error) {
      console.error('Error get data: ', error);
      throw error;
    }
  }