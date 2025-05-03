import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";


export function ModalDelete({ open, onClose, onDeleted, itemId}) {
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
            <Button variant="gradient" color="green" onClick={() => {
              onDeleted(itemId);
              onClose();
              }}>
              
              <span>Konfirmasi</span>
            </Button>
        </DialogFooter>
    </Dialog>
  );
}
