
import React, { useEffect, useState } from "react";
import { StatisticsCard } from "@/widgets/cards";
import {
  BanknotesIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";

import { Typography } from "@material-tailwind/react";
import { apiFetchDashboard } from "../../api/dashboardapi.js";
import ChartDashboard from "../../widgets/charts/chart-dashboard.jsx"
import { apiFetchUser } from "@/api/getuser.js";

export function Home() {
    const [dataDashboard, setDataDashboard] = useState([]);
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const fetchedDataDashboard = await apiFetchDashboard();
          setDataDashboard([
          {
            color: "gray",
            icon: BanknotesIcon,
            title: "Anggaran Pengeluaran Belanja",
            value: new Intl.NumberFormat('id-ID', {
              style: 'currency',
              currency: 'IDR',
              minimumFractionDigits: 0, // Tanpa angka desimal
            }).format(fetchedDataDashboard.data.totalOutcome),

            footer: {
              color: "text-green-500",
              value: "-",
              label: "Pengeluaran",
            },
          },
          {
            color: "gray",
            icon: CurrencyDollarIcon,
            title: "Laporan Kas Masuk",
          
            value: new Intl.NumberFormat('id-ID', {
              style: 'currency',
              currency: 'IDR',
              minimumFractionDigits: 0,
            }).format(fetchedDataDashboard.data.totalIncome),

            footer: {
              color: "text-green-500",
              value: "-",
              label: "Pemasukan",
            },
          },
          {
            color: "gray",
            icon: ChartBarIcon,
            title: "Sisa Saldo Anggaran",
            value: new Intl.NumberFormat('id-ID', {
              style: 'currency',
              currency: 'IDR',
              minimumFractionDigits: 0,
            }).format(fetchedDataDashboard.data.balance),
            
            footer: {
              color: fetchedDataDashboard.data.balance >= 0 ?"text-green-500" : "text-red-500",
              value: `${(fetchedDataDashboard.data.balance / fetchedDataDashboard.data.totalOutcome * 100).toFixed(2)}%`,
              label: "Sisa Dana",
            },
          },
        ]);
          console.log(fetchedDataDashboard); 
        } catch (error) {
          console.error("Error fetching data:", error); 
        }
      };
  
      fetchData(); 
    }, []);

    const [user, setUser] = useState();
    const handleUser = async () => {
      try {
        const data = await apiFetchUser();
        setUser(data);

      } catch (error) {
        console.error('Error fetching income data:', error);
      }
    };

    useEffect(() => {
      handleUser();
    }, []);

  return (
    <>
    <div className="mt-10">
      {user ? (

        <h1 className="mb-3 font-semibold text-gray-800">Hallo {user.name}</h1>
      ) : (
        <h1 className="mb-3"> NaN</h1>
      )}
      <div className="mb-12 flex justify-start gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        {dataDashboard.map(({ icon, title, footer, ...rest }) => (
          <StatisticsCard
            key={title}
            {...rest}
            title={title}
            icon={React.createElement(icon, {
              className: "w-6 h-6 text-white",
            })}
            footer={
              <Typography className="font-normal text-blue-gray-600">
                <strong className={footer.color}>{footer.value}</strong>
                &nbsp;{footer.label}
              </Typography>
            }
          />
        ))}
      </div>
    </div>
    <ChartDashboard/>
    </>
  );
}

export default Home;
