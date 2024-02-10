import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Stack from "@mui/material/Stack";

// eslint-disable-next-line react/prop-types
const UpdateBookQuantityCounter = ({ isMobile }) => {
  console.log(isMobile);
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
    <Stack direction="row">
      <IconButton
        onClick={handleDecrement}
        size=""
        variant="contained"
        color="primary"
      >
        <RemoveIcon fontSize={isMobile ? "medium" : "large"} />
      </IconButton>
      <TextField
        type="text"
        variant="outlined"
        value={count}
        sx={{maxWidth: "60px"}}
        inputProps={{ sx: { textAlign: "center" } }}
        onChange={handleInputChange}
      />
      <IconButton
        onClick={handleIncrement}
        size=""
        variant="contained"
        color="primary"
      >
        <AddIcon fontSize={isMobile ? "medium" : "large"} />
      </IconButton>
    </Stack>
  );
};

export default UpdateBookQuantityCounter;
