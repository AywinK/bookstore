/* eslint-disable react/prop-types */
import Button from "@mui/material/Button";

const AddToBasketButton = ({ isMobile }) => {
  return (
    <Button
      size={isMobile ? "small" : "large"}
      color="secondary"
      variant="contained"
    >
      Add to Basket
    </Button>
  );
};

export default AddToBasketButton;
