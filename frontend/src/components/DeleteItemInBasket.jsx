/* eslint-disable react/prop-types */
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { useBasketActions } from "../customHooks/useBasketActions";

const DeleteItemInBasket = ({ book, isMobile }) => {
  const { handleRemoveBook } = useBasketActions();

  return (
    <Button
      variant="contained"
      sx={{
        maxWidth: isMobile ? "1em" : "",
      }}
      size="small"
      onClick={() => handleRemoveBook(book)}
    >
      <DeleteIcon fontSize="large" />
    </Button>
  );
};

export default DeleteItemInBasket;
