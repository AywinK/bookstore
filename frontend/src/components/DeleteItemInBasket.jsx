import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { useBasketActions } from "../customHooks/useBasketActions";

const DeleteItemInBasket = ({ book }) => {
  const { handleRemoveBook } = useBasketActions();

  return (
    <Button onClick={() => handleRemoveBook(book)}>
      <DeleteIcon />
    </Button>
  );
};

export default DeleteItemInBasket;
