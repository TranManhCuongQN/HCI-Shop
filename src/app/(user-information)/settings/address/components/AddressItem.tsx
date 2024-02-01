import {
  Box,
  Chip,
  Dialog,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import InFormDialog from "./InformDialog";
import AddressForm from "./AddressForm";

export interface IAddressItemProps {
  address?: {
    name: string;
    address: string;
    phone: string;
    default: boolean;
  };
}

export default function AddressItem(props: IAddressItemProps) {
  const [openDelete, setOpenDelete] = React.useState<boolean>(false);
  const [openEdit, setOpenEdit] = React.useState<boolean>(false);

  const onCloseDelete = () => {
    setOpenDelete(false);
  };

  const onCloseEdit = () => {
    setOpenEdit(false);
  };
  return (
    <Box
      sx={{
        width: "100%",
        mt: 5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stack spacing={0.5}>
          <Stack direction="row" spacing={1}>
            <Typography variant="h6" color="inherit">
              {props.address?.name}
            </Typography>
            {props.address?.default && (
              <Chip label="Default" color="primary" size="small" />
            )}
          </Stack>
          <Stack>
            <Typography variant="body2" color="text.secondary">
              Address: {props.address?.address}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: {props.address?.phone}
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Tooltip title="Edit" onClick={() => setOpenEdit(true)}>
            <IconButton>
              <ModeEditOutlineIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete" onClick={() => setOpenDelete(true)}>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      </Box>

      <InFormDialog
        open={openDelete}
        onClose={onCloseDelete}
        data={props.address}
      />
      <AddressForm open={openEdit} onClose={onCloseEdit} />
    </Box>
  );
}
