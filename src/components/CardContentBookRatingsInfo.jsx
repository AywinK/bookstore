/* eslint-disable react/prop-types */
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

const CardContentBookRatingsInfo = ({ average_ratings, count_ratings }) => {
  return (
    <Typography
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexWrap: "wrap",
      }}
      variant="body2"
      color="text.secondary"
    >
      {average_ratings}
      <Rating precision={0.1} value={average_ratings} readOnly />(
      {count_ratings.toLocaleString()})
    </Typography>
  );
};

export default CardContentBookRatingsInfo;
