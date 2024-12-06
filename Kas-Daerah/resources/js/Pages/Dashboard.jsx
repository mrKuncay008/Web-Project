import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Button} from "@nextui-org/react";

import { TrendingUp, TrendingDown, ArrowDown, DollarSign, ArrowUp } from 'react-feather';
import { Head, Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Dashboard(props) {
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalOutcome, setTotalOutcome] = useState(0);
    const [totalSave, setTotalSave] = useState(0);
    const [dataIn, setDataIN] = useState(['']); 

    const [dataOut, setDataOut] = useState(['']);

    const [dataSave, setDataSave] = useState([
        {id:9303,deskripsi:'Reksadana', tanggal:'2024-10-20', total:20000, status:'Pending' },
        {id:9302,deskripsi:'Saham BCA', tanggal:'2024-11-20', total:35000, status:'Pending' },
        {id:9305,deskripsi:'Saham Telkomsel', tanggal:'2024-12-20', total:40000, status:'Pending' },
        {id:9309,deskripsi:'Crypto', tanggal:'2024-14-20', total:50000, status:'Pending' },
    ]);

    const handleDelIn = async (id) => {
        console.log("Deleting income with ID:", id);
        try {
            const response = await fetch(`/api/trans/incomes/${id}`, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                },
              });
        
              const data = await res.json();
              console.log(data);
              setDataIN(data.table_income);
        
              if (response.ok) {
                toast.success(data.message);
              } else {
                toast.error('Gagal menghapus data');
              }
        } catch (error) {
            toast.error('Terjadi kesalahan, coba lagi!');
        }
    }
    const handleDelOut = async (id) => {
        console.log("Deleting income with ID:", id);
        try {
            const response = await fetch(`/api/trans/outcomes/${id}`, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                },
              });
        
              const data = await res.json();
              console.log(data);
              setDataOut(data.table_outcome);
        
              if (response.ok) {
                toast.success(data.message);
              } else {
                toast.error('Gagal menghapus data');
              }
        } catch (error) {
            toast.error('Terjadi kesalahan, coba lagi!');
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/trans');
                const data = await res.json();
                console.log(data)
                setDataIN(data.table_income);
                setDataOut(data.table_outcome);

            } catch (err) {
                console.error('Error Fetching data: ', err);
            }
        };
        fetchData();
    }, []);
    
    const dataOne = () => {
     return dataIn.map((datai, index) => (
        <tr key={datai.id}>
            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>{index + 1}</td>
            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>{datai.name}</td>
            
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <Button color="primary" size='sm' className="hover:bg-blue-900 mr-2">Update</Button>
                <Button color="danger" onClick={() => handleDelIn(datai.id)} size='sm' className="hover:bg-red-900">Delete</Button>
            </td>

            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{datai.date_colmn}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{datai.total ? datai.total.toLocaleString() : 'N/A'}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Pending</td>
          </tr>
    ));
}; 
    
    const dataTwo = () => {
    return dataOut.map((datao, index) => (
        <tr key={datao.id}>
            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>{index + 1}</td>
            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>{datao.name}</td>
            
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <Button color="primary" size='sm' className="hover:bg-blue-900 mr-2">Update</Button>
                <Button 
                color="danger"
                size='sm'
                onClick={() => handleDelOut(datao.id)}
                className="hover:bg-red-900">Delete</Button>
            </td>

            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{datao.date_colmn}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{datao.total}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Pending</td>
          </tr>
    ));
};

    useEffect(() => {
        const totalIn = dataIn.reduce((acc, data) => acc + data.total, 0);
        setTotalIncome(totalIn);
    }, [dataIn]);

    useEffect(() => {
        const totalOut = dataOut.reduce((acc, data) => acc + data.total, 0);
        setTotalOutcome(totalOut);
    }, [dataOut]);

    useEffect(() => {
        const totalSave = dataSave.reduce((acc, data) => acc + data.total, 0);
        setTotalSave(totalSave);
    }, [dataSave]);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-slate-300 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            <h1 className='ml-7 font-semibold text-xl text-slate-800'>Hallo {props.auth.user.name}</h1>

            <div className="py-12 border-b-2 border-gray-500">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex text-slate-900 justify-center space-x-6">
                        <div className={`p-6 w-64 h-40 rounded shadow-md bg-green-400`}>
                            <div className='flex gap-2 mb-2 border-b-1 border-b-slate-950'>
                                <ArrowDown />
                                <h2 className="text-lg font-medium">Income</h2>
                            </div>
                            <p className="text-2xl font-semibold">{totalIncome.toLocaleString()}</p>
                        </div>

                        <div className={`p-6 w-64 h-40 rounded shadow-md bg-red-400`}>
                            <div className='flex gap-2 mb-2 border-b-1 border-b-slate-950'>
                                <ArrowUp />
                                <h2 className="text-lg font-medium">Outcome</h2>
                            </div>
                            <p className="text-2xl font-semibold">{totalOutcome.toLocaleString()}</p>
                        </div>

                        <div className={`p-6 w-64 h-40 rounded shadow-md bg-yellow-300`}>
                            <div className='flex gap-2 mb-2 border-b-1 border-b-slate-950'>
                                <DollarSign />
                                <h2 className="text-lg font-medium">
                                    <a className="transition-colors duration-300">Total amount</a>
                                </h2>
                            </div>
                            <p className="text-2xl font-semibold">{totalSave.toLocaleString()}</p>
                        </div>
                </div>
                </div>
            </div>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-gray-100 overflow-hidden shadow-sm rounded-lg">
                    <h1 className='flex gap-3 ml-2 font-semibold text-l text-slate-800'>
                        Income Activity
                        <TrendingUp color='green'/>
                    </h1>
                    <div className='mt-10 '>
                        <table className="min-w-full divide-y divide-gray-200 rounded-lg">
                    <thead className="bg-green-600 text-slate-100 font-semibold">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                No
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                Action
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                Total
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {dataOne()}
                    </tbody>
                </table>
                </div>

                <h1 className='flex mt-20 gap-3 ml-2 font-semibold text-l text-slate-800'>
                        Outcome Activity
                        <TrendingDown color='red'/>
                </h1>
                    <div className='mt-10 '>
                        <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-red-600 text-slate-100 font-semibold">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                No
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                Action
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                Total
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {dataTwo()}
                    </tbody>
                </table>
                </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
