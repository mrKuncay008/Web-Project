import React, { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
import { apiFetchIncome, postApi } from "@/api/incomeapi";
import toast from "react-hot-toast";


export function DialogCreateIncoma({ open, onClose, refreshIncomeData }) {
  const [incomeInput, setIncomeInput] = useState({
    name: "",
    date_colmn: "",
    total: ""
  });

  const handleChange = (e) => {
    setIncomeInput({
        ...incomeInput,
        [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await postApi(incomeInput);
        
    if (result.success) {
      toast.success("Data submitted successfully!",{
        duration:3000
      });
      setIncomeInput({
        name: "",
        date_colmn: "",
        total: ""
      });
      onClose();

      if (refreshIncomeData) {
        refreshIncomeData();
      }
    } else {
    toast.error("An unexpected error occurred.",{
      duration:4000
    });
    }
  };  
  
  return (
    <>
      <Dialog 
        size="xs"
        open={open}
        handler={onClose}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full sm:w-[300px] md:w-[500px] lg:w-[400px] xl:w-[600px]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Buat data pemasukan
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Masukan data yang sesuai
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Nama
            </Typography>
            <Input label="Nama" size="lg"
              name="name"
              value={incomeInput.name}
              onChange={handleChange}
            />
            <Typography className="-mb-2" variant="h6">
              Tanggal
            </Typography>
            <Input type="date" label="Tanggal" size="lg"
              name="date_colmn" 
              value={incomeInput.date_colmn}
              onChange={handleChange}
            />
            <Typography className="-mb-2" variant="h6">
              Total
            </Typography>
            <Input label="Total" size="lg"
              name="total"
              onKeyDown={(e) => { 
                if ( 
                  e.key === "e" || 
                  e.key === "E" || 
                  e.key === "+" || 
                  e.key === "-" || 
                  isNaN(Number(e.key)) && e.key !== "Backspace" 
                ) { 
                  e.preventDefault(); 
                } 
              }}
              onChange={(e) => {
                const rawValue = e.target.value.replace(/[^0-9]/g, "");
                const formattedValue = rawValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                setIncomeInput((prev) => ({
                  ...prev,
                  total: rawValue, // Simpan angka mentah di state
                }));
              }}
              value={incomeInput.total.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              autoComplete="false" 
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleSubmit} fullWidth>
              Submit
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
