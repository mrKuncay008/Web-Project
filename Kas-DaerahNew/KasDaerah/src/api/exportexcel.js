import axiosApi from "@/lib/axios";

export const downloadExcel = async () => {
  try {
    const response = await axiosApi.get("/api/export-excel", {
      responseType: "blob",
    });

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;

    link.setAttribute("download", "Income_Outcome_Report.xlsx");
    document.body.appendChild(link);
    link.click();

    link.parentNode.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error downloading Excel file:", error);
  }
};
