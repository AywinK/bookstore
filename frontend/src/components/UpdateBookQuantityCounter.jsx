import { useEffect, useRef } from "react";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Stack from "@mui/material/Stack";
import { useBasketActions } from "../customHooks/useBasketActions";

// eslint-disable-next-line react/prop-types
const UpdateBookQuantityCounter = ({ isMobile, book }) => {

  // eslint-disable-next-line react/prop-types
  const { quantity, stock_quantity } = book;

  const quantityTextFieldRef = useRef(quantity);

  const { handleUpdateBookQuantity } = useBasketActions();

  useEffect(() => {
    quantityTextFieldRef.current.value = quantity;
  }, [quantity])


  const handleIncrement = () => {
    handleUpdateBookQuantity(book, Math.min(quantity + 1, stock_quantity, 999)); // prevent overflow and ensure in stock
  };

  const handleDecrement = () => {
    handleUpdateBookQuantity(book, Math.max(quantity - 1, 1)); // minimum quantity before modifying basket

  };

  const handleQuantityInputChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      handleUpdateBookQuantity(book, Math.min(value, stock_quantity, 999)); // ensure in stock validation and prevent text overflow
    }
  };

  const handleQuantityInputFocus = () => quantityTextFieldRef.current.select(); // reduce step needed to update quantity in basket

  const handleQuantityInputKeyDown = e => (!/^\d+$/.test(e.key) && //prevent non-digit input
    !["Backspace", "ArrowLeft", "ArrowRight", "Tab"].some(key => key === e.key) // allow moving cursor, removing numbers, tab navigation
    && e.preventDefault());

  const handleQuantityInputBlur = e => e.target.value = quantity; // display latest value

  return (
    <Stack direction="row">

      {/* Decrement Button */}
      <IconButton onClick={handleDecrement} size="large" color="primary">
        <RemoveIcon fontSize={isMobile ? "medium" : "large"} />
      </IconButton>

      {/* Update Quantity Button */}
      <TextField
        inputRef={quantityTextFieldRef}
        onFocus={handleQuantityInputFocus}
        onBlur={handleQuantityInputBlur}
        onKeyDown={handleQuantityInputKeyDown}
        type="text"
        variant="outlined"
        value={quantity}
        sx={{ maxWidth: "60px" }}
        inputProps={{ sx: { textAlign: "center" }, inputMode: "numeric", pattern: "[0-9]*" }} // brings up numeric only keyboards on mobile devices
        onChange={handleQuantityInputChange}
      />

      {/* Increment Button */}
      <IconButton onClick={handleIncrement} size="large" color="primary">
        <AddIcon fontSize={isMobile ? "medium" : "large"} />
      </IconButton>

    </Stack>
  );
};

export default UpdateBookQuantityCounter;
