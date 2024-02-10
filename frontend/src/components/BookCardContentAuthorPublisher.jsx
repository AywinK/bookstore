/* eslint-disable react/prop-types */
import Typography from "@mui/material/Typography";

const BookCardContentAuthorPublisher = ({
  author,
  publication_year,
  publisher,
}) => {
  return (
    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
      by {author} | Publisher: {publisher} ({publication_year})
    </Typography>
  );
};

export default BookCardContentAuthorPublisher;
