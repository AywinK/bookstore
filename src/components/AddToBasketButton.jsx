/* eslint-disable react/prop-types */
import Button from "@mui/material/Button";
import { useBasketActions } from "../customHooks/useBasketActions";

const AddToBasketButton = ({ isMobile = false, book }) => {
  const { handleAddBook } = useBasketActions();

  return (
    <Button
      size={isMobile ? "small" : "large"}
      color="secondary"
      variant="contained"
      onClick={() => handleAddBook(book)}
    >
      Add to Basket
    </Button>
  );
};

export default AddToBasketButton;
