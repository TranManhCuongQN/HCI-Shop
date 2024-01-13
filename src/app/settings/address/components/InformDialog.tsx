import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import * as React from "react";

export interface InFormDialogProps {
  open: boolean;
  onClose: () => void;
  data?: {
    name: string;
    address: string;
    phone: string;
    default: boolean;
  };
}

export default function InFormDialog(props: InFormDialogProps) {
  const { open, onClose } = props;
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Do you want to delete this address information?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Stack>
            <Typography variant="body2" color="inherit">
              Name: {props.data?.name}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Address: {props.data?.address}
            </Typography>

            <Typography variant="body2" color="inherit">
              Phone: {props.data?.phone}
            </Typography>
          </Stack>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button type="button" onClick={onClose}>
          Disagree
        </Button>
        <Button type="button" color="error" autoFocus onClick={onClose}>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}
