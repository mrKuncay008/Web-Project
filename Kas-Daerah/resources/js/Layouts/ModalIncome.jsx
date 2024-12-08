import React from "react";
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

export default function ModalIncome() {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [backdrop, setBackdrop] = React.useState("opaque");
  const [size, setSize] = React.useState("sm");

  const backdrops = ["blur"];

  const handleOpen = (backdrop) => {
    setBackdrop(backdrop);
    onOpen();
    setSize();
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
            Input
          </span>
        ))}
      </div>
      <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Input New Income</ModalHeader>
              <ModalBody>
              <form onSubmit=''>
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
                //   value={formData.name}
                //   onChange={handleInputChange}
                  required
                />
              </div>

              {/* Input for Date */}
              <div className="flex flex-col">
                <label htmlFor="date" className="text-sm font-medium">Date</label>
                <input
                  id="date"
                  type="date"
                  name="date"
                  className="mt-1 p-2 border border-gray-300 rounded"
                //   value={formData.date}
                //   onChange={handleInputChange}
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
                //   value={formData.amount}
                //   onChange={handleInputChange}
                  required
                />
              </div>

            </div>
          </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

