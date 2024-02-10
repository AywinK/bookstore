import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const UpdateBookQuantityCounter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1 >= 0 ? count - 1 : 0);
  };

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      setCount(value);
    }
  };

  return (
    <Box display="flex" alignItems="center">
      <Button onClick={handleDecrement} variant="contained" color="secondary">
        -
      </Button>
      <TextField
        type="number"
        variant="outlined"
        value={count}
        onChange={handleInputChange}
        inputProps={{ min: 0 }}
        style={{ margin: "0 8px", width: "60px", textAlign: "center" }}
      />
      <Button onClick={handleIncrement} variant="contained" color="primary">
        +
      </Button>
    </Box>
  );
};

export default UpdateBookQuantityCounter;
