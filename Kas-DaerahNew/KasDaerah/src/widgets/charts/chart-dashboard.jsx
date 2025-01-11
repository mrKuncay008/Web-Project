import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import { Card } from "@material-tailwind/react";
import { apiFetchChart } from "../../api/dashboardapi";

const ChartDashboard = () => {
  const chartRef = useRef(null);
  const [months, setMonths] = useState([]); // State untuk menyimpan bulan unik
  const [incomeData, setIncomeData] = useState([]); // State untuk data pemasukan
  const [outcomeData, setOutcomeData] = useState([]); // State untuk data pengeluaran

  // Fungsi untuk mengonversi angka bulan menjadi nama bulan
  const monthNames = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];

  const getMonthName = (monthNumber) => {
    return monthNames[parseInt(monthNumber) - 1]; // Ubah angka bulan menjadi nama bulan
  };

  // Fungsi untuk mengelompokkan data berdasarkan bulan
  const groupDataByMonth = (data) => {
    const grouped = {};
    data.forEach((item) => {
      if (item.date_colmn) {
        const [year, month] = item.date_colmn.split("-"); // Pisahkan tahun dan bulan
        if (year === "2024") {
          if (!grouped[month]) {
            grouped[month] = 0; // Inisialisasi nilai
          }
          grouped[month] += item.total; // Tambahkan total untuk bulan yang sesuai
        }
      }
    });
    return grouped;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedDataChart = await apiFetchChart();
        const incomeData = fetchedDataChart.table_income || [];
        const outcomeData = fetchedDataChart.table_outcome || [];

        // Gabungkan pemasukan dan pengeluaran dan kelompokkan berdasarkan bulan
        const groupedIncome = groupDataByMonth(incomeData);
        const groupedOutcome = groupDataByMonth(outcomeData);

        // Buat daftar bulan unik (berdasarkan pemasukan & pengeluaran)
        const allMonths = Array.from(
          new Set([...Object.keys(groupedIncome), ...Object.keys(groupedOutcome)])
        ).sort();

        // Ubah angka bulan menjadi nama bulan
        const monthNamesArray = allMonths.map((month) => getMonthName(month));

        // Buat array total pemasukan & pengeluaran berdasarkan bulan
        const incomeTotals = allMonths.map((month) => groupedIncome[month] || 0);
        const outcomeTotals = allMonths.map((month) => groupedOutcome[month] || 0);

        setMonths(monthNamesArray); // Simpan nama bulan
        setIncomeData(incomeTotals); // Simpan data pemasukan
        setOutcomeData(outcomeTotals); // Simpan data pengeluaran
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (months.length > 0) {
      const data = {
        labels: months, // Gunakan nama bulan sebagai label
        datasets: [
          {
            label: 'Data Pemasukan',
            data: incomeData, // Data pemasukan
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
          },
          {
            label: 'Data Pengeluaran ',
            data: outcomeData, // Data pengeluaran
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      };

      const config = {
        type: 'bar',
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Grafik Pemasukan dan Pengeluaran Tahun 2024',
            },
          },
        },
      };

      const chart = new Chart(chartRef.current, config);

      return () => {
        chart.destroy(); // Hapus chart saat komponen di-unmount
      };
    }
  }, [months, incomeData, outcomeData]);

  return (
    <Card className="border border-blue-gray-100 shadow-sm p-5 max-w-screen-xl">
      <div>
        <canvas ref={chartRef}></canvas>
      </div>
    </Card>
  );
};

export default ChartDashboard;
