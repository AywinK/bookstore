/* eslint-disable react/prop-types */
import Typography from "@mui/material/Typography";

const BookCardContentPrice = ({ price }) => {
  return (
    <Typography
      variant="body1"
      fontSize="1.75em"
      color="text.primary"
      sx={{
        marginTop: "auto",
        "&::before": {
          content: "'£'",
          verticalAlign: "super",
          marginRight: "2px",
          fontSize: "0.9em",
        },
        "&::after": {
          content: `"${price.toFixed(2).split(".")[1] || "00"}"`,
          verticalAlign: "super",
          marginLeft: "1px",
          fontSize: "0.75em",
        },
      }}
      gutterBottom
    >
      {String(price).split(".")[0]}
    </Typography>
  );
};

export default BookCardContentPrice;
