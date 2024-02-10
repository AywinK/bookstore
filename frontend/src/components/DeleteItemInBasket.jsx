/* eslint-disable react/prop-types */
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { useBasketActions } from "../customHooks/useBasketActions";

const DeleteItemInBasket = ({ book, isMobile }) => {
  const { handleRemoveBook } = useBasketActions();

  return (
    <Button
      variant="contained"
      color="error"
      sx={{
        maxWidth: "20px",
        aspectRatio: "1/1",
        borderRadius: "50%",
      }}
      size="small"
      onClick={() => handleRemoveBook(book)}
    >
      <DeleteIcon fontSize="medium" />
    </Button>
  );
};

export default DeleteItemInBasket;
