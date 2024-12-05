import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Button } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { TrendingUp } from 'react-feather';

export default function Savings(props) {
    const [totalSave, setTotalSave] = useState(0);
    const [dataSave, setDataSave] = useState([
        {id:9303,deskripsi:'Reksadana', tanggal:'2024-10-20', total:20000, status:'Pending' },
        {id:9302,deskripsi:'Saham BCA', tanggal:'2024-11-20', total:35000, status:'Pending' },
        {id:9305,deskripsi:'Saham Telkomsel', tanggal:'2024-12-20', total:40000, status:'Pending' },
        {id:9309,deskripsi:'Crypto', tanggal:'2024-14-20', total:50000, status:'Pending' },
    ]);

//     useEffect(() => {
//         try {
//             setDataSave();
//             console.log(dataSave);
// 
//         } catch (error) {
//             console.error('Error Fetching data: ', err);
//         }
//     },[]);

    const dataThree = () => {
        return dataSave.map((data, index) => (
           <tr key={data.id}>
               <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>{index + 1}</td>
               <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>{data.deskripsi}</td>
               
               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <a className='text-blue-700' href="">Ref-7391jjjdhuu3883</a>
               </td>
   
               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{data.tanggal}</td>
               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{data.total ? data.total.toLocaleString() : 'N/A'}</td>
               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Pending</td>
             </tr>
       ));
   }; 

    return (
        <>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
                header={<h2 className="font-semibold text-xl text-slate-300 leading-tight">My Savings</h2>}
            >
                <Head title='My Savings'/>
                <h1 className='ml-7 font-semibold text-xl text-slate-800'>{props.auth.user.name} Savings Report 💵</h1>
                <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-gray-100 overflow-hidden shadow-sm rounded-lg">
                    <h1 className='flex gap-3 ml-2 font-semibold text-l text-slate-800'>
                        Savings Activity
                        <TrendingUp color='green'/>
                    </h1>
                    <div className='mt-10 '>
                        <table className="min-w-full divide-y divide-gray-200 rounded-lg">
                    <thead className="bg-yellow-500 text-slate-100 font-semibold">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                No
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                Trans ID
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
                        {dataThree()}
                    </tbody>
                </table>
                </div>
                    </div>
                </div>
            </div>

            </AuthenticatedLayout>
        </>
    )
}