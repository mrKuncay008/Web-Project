import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { DialogCreateOutcome } from "@/componens/modaloutcome";
import { apiDeleteOutcome, apiFetchOutcome } from "@/api/outcomeapi";
import { DialogEditOutcome } from "@/componens/modaleditoutcome";
import { ModalDelete } from "@/componens/modaldeleteincome";
import toast from "react-hot-toast";

export function Outcome() {

  const [isModalOpenDelete, setModalOpenDelete] = useState(false);
  const [incomeData, setIncomeData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [isModalEditOpen, setModalEditOpen] = useState(false);


  const handleOpenModalDelete = (id) => {
    setSelectedId(id); 
    setModalOpenDelete(true); 
};

const handleEdit = (id) => {
  setSelectedId(id);
  setModalEditOpen(true);
}

const handleCloseModalEdit = () => {
  setModalEditOpen(false);
}

  const handleCloseModalDelete = () => {
    setModalOpenDelete(false);
  };

  const [isModalOpenCreate, setModalOpenCreate] = useState(false);

  const handleOpenModalCreate = () => {
    setModalOpenCreate(true);
  };

  const handleCloseModalCreate = () => {
    setModalOpenCreate(false);
  }
  

  const fetchOutcomeData = async () => {
    try {
      const data = await apiFetchOutcome();
      setIncomeData(data);


    } catch (err) {
      setError('Failed to fetch income data');
      console.error('Error fetching income data:', err);
    }
  };

  const handleDelete = async (id) => {
    const promise =apiDeleteOutcome(id) 

    toast.promise(promise, {
      loading: 'Deleting...',
      success: 'Item deleted successfully!',
      error: 'Failed to delete the item.',
    },{
      duration: 4000
    });
    try {
      console.log('id', id);
        await promise;
        fetchOutcomeData();

      } catch (error) {
        console.error('Failed to delete:', error);
      }
};

useEffect(() => {
  fetchOutcomeData();
}, []);

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <div className="">
        <Button onClick={handleOpenModalCreate}>Add Outcome</Button>
      </div>
      <Card>
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Outcome Table
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
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {name}
                            </Typography>
                            {/* <Typography className="text-xs font-normal text-blue-gray-500">
                              {email}
                            </Typography> */}
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
                          {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(total)}
                        </Typography>
                      </td>
                      <td className= "py-3 border-b border-blue-gray-50">
                        <Typography
                          as="a"
                          href="#"
                          className="text-xs font-semibold text-blue-gray-600"
                        >
                          <div className="flex items-center gap-2">   
                            <button class="rounded-md bg-[#eab435] py-2 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-[#eab435]/90 focus:shadow-none active:bg-[#eab435]/90 hover:bg-[#eab435]/90 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" onClick={() => handleEdit(id)} title="edit">
                              <i class="fas fa-edit w-3 h-3" aria-hidden="true"></i>
                            </button>
                            <button className="rounded-md bg-[#ea5c4c] py-2 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-[#ea5c4c]/90 focus:shadow-none active:bg-[#ea5c4c]/90 hover:bg-[#ea5c4c]/90 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" title="delete"  onClick={() => handleOpenModalDelete(id)} >
                              <i className="fa fa-trash w-3 h-3" aria-hidden="true"></i>
                            </button>
                          </div>
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
      <ModalDelete open={isModalOpenDelete} onClose={handleCloseModalDelete} selectedId={selectedId} onDeleted={handleDelete} itemId={selectedId}/>
      <DialogEditOutcome open={isModalEditOpen} onClose={handleCloseModalEdit} selectedId={selectedId} refreshOutcomeData={fetchOutcomeData} />
      <DialogCreateOutcome open={isModalOpenCreate} onClose={handleCloseModalCreate} refreshOutcomeData={fetchOutcomeData} />
    </div>
  );
}

export default Outcome;
