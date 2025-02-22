import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { toast } from "react-toastify";
import { Inertia } from "@inertiajs/inertia";

export default function ModalIncome() {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [backdrop, setBackdrop] = React.useState("opaque");
  const [size, setSize] = React.useState("sm");
  const [ formData, setFormData ] = useState({
    name: "",
    total: "",
  });

  const backdrops = ["blur"];

  const handleOpen = (backdrop) => {
    setBackdrop(backdrop);
    onOpen();
    setSize();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitIn = async (e) => {
    if (!formData.name || !formData.total && !formData.date_column) {
      toast.error("Semua Field Harus di Isi !");
      return;
    }
    console.log("Submit triggered", formData);
    try {
      Inertia.post(route("api.income.store", formData));
      toast.success("Income successfully created!");
      setFormData({ name: "", total: "" });
      onClose();
      console.log(formData.date_column);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Terjadi kesalahan, coba lagi!");
    }
  };

  const handleDelete = async (id) => {
    try {
        const result = await apiDeleteIncome(id);
        console.log('Deleted result:', result);
    } catch (error) {
        console.error('Failed to delete:', error);
    }
  };


  return (
    <>
      <div className="cursor-pointer inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ">
        {backdrops.map((b) => (
          <span
            key={b}
            className="capitalize"
            variant="flat"
            onClick={() => handleOpen(b)}
          >
            Pemasukan Dana
          </span>
        ))}
      </div>
      <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
        {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 font-semibold">Input Pemasukan Baru</ModalHeader>
              <ModalBody>
            <form onSubmit={handleSubmitIn}>
              <div className="flex flex-col gap-4">
              {/* Input for Name */}
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm font-medium">Description</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="mt-1 p-2 border border-gray-300 rounded"
                  placeholder="Masukan Deskripsi"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Input for Date */}
              <div className="flex flex-col">
                <label htmlFor="date" className="text-sm font-medium">Date</label>
                <input
                  id=""
                  type="date"
                  name="date_colmn"
                  className="mt-1 p-2 border border-gray-300 rounded"
                  value={formData.date_column}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {/* Input for Total*/}
              <div className="flex flex-col">
                <label htmlFor="total" className="text-sm font-medium">Total</label>
                <input
                  id="total"
                  type="number"
                  name="total"
                  className="mt-1 p-2 border border-gray-300 rounded"
                  placeholder="Masukan Total Nominal"
                  value={formData.total}
                  onChange={handleInputChange}
                  required
                />
              </div>

            </div>
          </form>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="success" onPress={handleSubmitIn}>
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

