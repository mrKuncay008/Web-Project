import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axiosApi from "@/lib/axios";
import toast from "react-hot-toast";

const createSchema = z.object({
  name: z.string().min(1, "Nama wajib di isi").max(255, "Name must not exceed 255 characters"),
  total: z.string().min(1, "Nomer wajib di isi"),
  date_colmn: z.string().refine((value) => !isNaN(Date.parse(value)), {
    message: "Date wajib di isi",
  }),
});


export function DialogCreateOutcome({ open, onClose, refreshOutcomeData }) {
  const form = useForm({
    defaultValues: {
      name: "",
      total: "",
      date_colmn: "",
    },
    resolver: zodResolver(createSchema),
  });

  const { control, handleSubmit, formState: { errors } } = form;

  const CreateOutcome = async (data) => {
    try {
      const response = await axiosApi.post('api/outcome', data);
      if (response.status === 201 || response.status === 200) {
        
        toast.success("Data submitted successfully!",{
          duration:3000
        });

        form.reset();
        onClose();

        if (refreshOutcomeData){
          refreshOutcomeData();
        }
      }
    } catch (error) {
      console.error("Error saat membuat data:", error);
      toast.error("An unexpected error occurred.",{
        duration:4000
      });
    }
  };

  return (
    <Dialog
      size="xs"
      open={open}
      handler={onClose}
      className="bg-transparent shadow-none"
    >
      <Card className="mx-auto w-full sm:w-[300px] md:w-[500px] lg:w-[400px] xl:w-[600px]">
        <form onSubmit={handleSubmit(CreateOutcome)}>
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Buat data Pengeluaran
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
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <div>
                  <Input {...field} label="Nama" size="lg" />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
              )}
            />
            <Typography className="-mb-2" variant="h6">
              Tanggal
            </Typography>
            <Controller
              name="date_colmn"
              control={control}
              render={({ field }) => (
                <div>
                  <Input {...field} label="Tanggal" size="lg" type="date" />
                  {errors.date_colmn && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.date_colmn.message}
                    </p>
                  )}
                </div>
              )}
            />
            <Typography className="-mb-2" variant="h6">
              Total
            </Typography>
            <Controller
              name="total"
              control={control}
              render={({ field }) => (
                <div>
                  <Input
                    {...field}
                    label="Total"
                    size="lg"
                    type="text"
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
                    onInput={(e) => {
                      let rawValue = e.target.value.replace(/[^0-9]/g, "");
                      e.target.value = rawValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                      field.onChange(rawValue);
                    }}
                    value={field.value.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  />
                  {errors.total && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.total.message}
                    </p>
                  )}
                </div>
              )}
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button type="submit" variant="gradient" fullWidth>
              Submit
            </Button>
          </CardFooter>
        </form>
      </Card>
    </Dialog>
  );
}
