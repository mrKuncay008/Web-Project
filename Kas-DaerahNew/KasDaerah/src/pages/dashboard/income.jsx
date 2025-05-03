import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

import { ModalDelete } from "@/componens/modaldeleteincome";
import { useEffect, useState } from "react";
import { DialogCreateIncoma } from "@/componens/modalincome";
import { apiDeleteIncome, apiFetchIncome } from "@/api/incomeapi";
import { DialogEditIncome } from "@/componens/modaleditincome";
import toast from "react-hot-toast";

export function Income() {

  const [isModalOpen, setModalOpen] = useState(false);
  const [itemDelete, setItemDelete] = useState(null);
  const [incomeData, setIncomeData] = useState([]);
  const [isModalOpenCreate, setModalOpenCreate] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [isModalEditOpen, setModalEditOpen] = useState(false);

  const handleOpenModal = (id) => {
    setModalOpen(true);
    setItemDelete(id);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setItemDelete(null); 
  };


  const handleOpenModalCreate = () => {
    setModalOpenCreate(true);
  };

  const handleCloseModalCreate = () => {
    setModalOpenCreate(false);
  }

  const handleEdit = (id) => {
    setSelectedId(id);
    setModalEditOpen(true);
  }

  const handleCloseModalEdit = () => {
    setModalEditOpen(false);
  }
  
  const fetchIncomeData = async () => {
    try {
      const data = await apiFetchIncome();
      setIncomeData(data);

    } catch (err) {
      setError('Failed to fetch income data');
      console.error('Error fetching income data:', err);
    }
  };

  const handleDelete = async (id) => {
    const promise = apiDeleteIncome(id);
    
    toast.promise(promise, {
      loading: 'Deleting...',
      success: 'Item deleted successfully!',
      error: 'Failed to delete the item.',
    },{
      duration: 4000
    });

    try {
      await promise; 
      fetchIncomeData();

      } catch (error) {
        console.error('Failed to delete:', error);
    }
};
  useEffect(() => {
    fetchIncomeData();
  }, []);

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <div className="">
        <Button onClick={handleOpenModalCreate}>Add Income</Button>
      </div>
      <Card>
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Income Table
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["No","Name", "Date", "total", "aksi"].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
            {incomeData.map(({ id, no, name, Date, total}, index) => {
            const className = `py-3 px-5 ${
              index === incomeData.length - 1 ? '' : 'border-b border-blue-gray-50'
            }`;

            return (
              <tr key={id}>
                <td className={className}>{index + 1}</td>
                <td className={className}>
                  <div className="flex items-center gap-4">
                    <div>
                      <Typography variant="small" color="blue-gray" className="font-semibold">
                        {name}
                      </Typography>
                    </div>
                  </div>
                </td>
                <td className={className}>
                  <Typography className="text-xs font-semibold text-blue-gray-600">
                    {Date}
                  </Typography>
                </td>
                <td className={className}>
                  <Typography className="text-xs font-semibold text-blue-gray-600">
                    Rp. {(total).toLocaleString()}
                  </Typography>
                </td>
                <td className="py-3 border-b border-blue-gray-50">
                  <Typography
                    as="a"
                    href="#"
                    className="text-xs font-semibold text-blue-gray-600"
                  >
                    <div className="flex items-center gap-2">
                      <button
                        className="rounded-md bg-[#eab435] py-2 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-[#eab435]/90 focus:shadow-none active:bg-[#eab435]/90 hover:bg-[#eab435]/90 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        title="edit"
                        onClick={() => handleEdit(id)}
                      >
                        <i className="fas fa-edit w-3 h-3" aria-hidden="true"></i>
                      </button>
                      <button
                        className="rounded-md bg-[#ea5c4c] py-2 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-[#ea5c4c]/90 focus:shadow-none active:bg-[#ea5c4c]/90 hover:bg-[#ea5c4c]/90 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        title="delete"
                        onClick={() => handleOpenModal(id)}
                      >
                        <i className="fa fa-trash w-3 h-3" aria-hidden="true"></i>
                      </button>
                    </div>
                  </Typography>
                </td>
              </tr>
            );
          })}
            </tbody>
          </table>
        </CardBody>
      </Card>
      <ModalDelete 
      open={isModalOpen} 
      onClose={handleCloseModal}
      onDeleted={handleDelete}
      itemId={itemDelete}
      />
      <DialogCreateIncoma open={isModalOpenCreate} onClose={handleCloseModalCreate} refreshIncomeData={fetchIncomeData} />
      <DialogEditIncome open={isModalEditOpen} onClose={handleCloseModalEdit} selectedId={selectedId} refreshIncomeData={fetchIncomeData}/>
    </div>
  );
}

export default Income;
