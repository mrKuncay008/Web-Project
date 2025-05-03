import { downloadExcel } from '@/api/exportexcel'
import React from 'react'
import toast from 'react-hot-toast';

const cards = [
  { title: 'Pembukuan 2024', description: 'APBD 2024' },
];

export default function Pembukuan() {
  const handleDownload = async () => {
    const promise = downloadExcel();
    try {
      toast.promise(promise, {
        loading: 'Donloading ...',
        success: 'file downloaded successfully!',
      },{
        duration:3000
      });

    } catch (error) {
      console.error("Somthings Eror! ",error)
    }
  };

  return (
    <div className='container mt-8'>
      <div className="mb-12 flex justify-start gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card, index) => (
          <div key={index} 
          className="relative bg-white/30 backdrop-blur-lg p-6 rounded-lg w-56 h-56 shadow-md hover:shadow-lg 
          transition-all duration-300 transform hover:scale-105 cursor-pointer"
          onClick={handleDownload}
          >

          <div className="absolute inset-0 bg-gradient-to-t from-blue-gray-700 via-transparent 
          to-transparent rounded-lg opacity-25"
          ></div>

            <div className="relative z-10 flex flex-col">
              <h3 className="text-md font-semibold text-blue-gray-800">{card.title}</h3>
              <p className="text-blue-gray-800 mt-4">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
