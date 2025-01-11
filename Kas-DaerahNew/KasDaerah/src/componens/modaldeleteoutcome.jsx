import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import axiosApi from "@/lib/axios";

export function ModalDeleteOut({ open, onClose, selectedId }) {
  const hendelDelete = async () => {
    try {
      const response = await axiosApi.delete(`/api/outcome/${selectedId}`);
      if (response.status === 200) {

        onClose(); // Tutup modal
        window.location.reload(); // Refresh halaman untuk memperbarui data
      }
    } catch (error) {
      console.error("Error saat menghapus data:", error);
      alert(`Error: ${error.response?.data?.message || "Terjadi kesalahan"}`);
    }
  };

  return (
    <Dialog
      open={open}
      handler={onClose}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
    >
      <DialogHeader>Apakah Anda yakin ingin menghapus ini?</DialogHeader>
      <DialogBody>
        Tindakan ini tidak dapat dibatalkan. Harap konfirmasi jika Anda ingin melanjutkan.
      </DialogBody>
      <DialogFooter>
        <Button variant="text" color="red" onClick={onClose} className="mr-1">
          <span>Batal</span>
        </Button>
        <Button variant="gradient" color="green" onClick={hendelDelete}>
          <span>Konfirmasi</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}