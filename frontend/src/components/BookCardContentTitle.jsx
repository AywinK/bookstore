/* eslint-disable react/prop-types */
import Typography from "@mui/material/Typography";

const BookCardContentTitle = ({ isMobile, book_title }) => {
  return (
    <Typography
      variant="h5"
      component="h2"
      fontSize={isMobile ? "1.25em" : "inital"}
    >
      {book_title}
    </Typography>
  );
};

export default BookCardContentTitle;
