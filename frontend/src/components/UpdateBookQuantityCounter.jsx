import { useState, useRef } from "react";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Stack from "@mui/material/Stack";
import { useBasketActions } from "../customHooks/useBasketActions";

// eslint-disable-next-line react/prop-types
const UpdateBookQuantityCounter = ({ isMobile, book }) => {

  const textFieldRef = useRef(null);

  const { handleUpdateBookQuantity } = useBasketActions();

  const [currentQuantity, setCurrentQuantity] = useState(book?.quantity || 1);

  const handleIncrement = () => {
    setCurrentQuantity(book.quantity);
    handleUpdateBookQuantity(book, Math.min(book?.quantity + 1, book?.stock_quantity))
  };

  const handleDecrement = () => {
    setCurrentQuantity(book.quantity);
    handleUpdateBookQuantity(book, Math.max(book?.quantity - 1, 1))

  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value);

    if (e.target.value === "") setCurrentQuantity(null);
    if (!isNaN(value) && value > 0) {
      setCurrentQuantity(Math.min(value, book?.stock_quantity));
      handleUpdateBookQuantity(book, Math.min(value, book?.stock_quantity));
    }
  };

  return (
    <Stack direction="row">
      <IconButton onClick={handleDecrement} size="large" color="primary">
        <RemoveIcon fontSize={isMobile ? "medium" : "large"} />
      </IconButton>
      <TextField
        onBlur={() => setCurrentQuantity(() => book?.quantity)}
        inputRef={textFieldRef}
        onFocus={() => textFieldRef.current.select()}
        type="text"
        variant="outlined"
        value={currentQuantity}
        sx={{ maxWidth: "60px" }}
        inputProps={{ sx: { textAlign: "center" }, inputMode: "numeric" }}
        onChange={handleInputChange}
      />
      <IconButton onClick={handleIncrement} size="large" color="primary">
        <AddIcon fontSize={isMobile ? "medium" : "large"} />
      </IconButton>
    </Stack>
  );
};

export default UpdateBookQuantityCounter;
