/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import InfoIcon from "@mui/icons-material/Info";

const BookMoreInfoButton = ({ book_id, isMobile }) => {
  return (
    <Button component={Link} color="primary" to={`/books/${book_id}`}>
      <InfoIcon fontSize={isMobile ? "medium" : "large"} />
    </Button>
  );
};

export default BookMoreInfoButton;
