/* eslint-disable react/prop-types */
import CardActions from "@mui/material/CardActions";

const BookCardActions = ({ children, isMobile }) => {
  return (
    <CardActions
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        "& > *": {
          flex: isMobile ? "" : "", //add 1 for mobile if any bugs
        },
      }}
    >
      {children}
    </CardActions>
  );
};

export default BookCardActions;
