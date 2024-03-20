/* eslint-disable react/prop-types */
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { useBasketActions } from "../customHooks/useBasketActions";

const DeleteItemInBasket = ({ book, isMobile }) => {
  const { handleRemoveBook } = useBasketActions();

  return (
    <IconButton
      color="error"
      size="small"
      onClick={() => handleRemoveBook(book)}
    >
      <DeleteIcon fontSize={isMobile? "medium" : "large"} />
    </IconButton>
  );
};

export default DeleteItemInBasket;
