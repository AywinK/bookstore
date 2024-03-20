/* eslint-disable react/prop-types */
import CardContent from "@mui/material/CardContent";


const BookCardContent = ({ children }) => {
  return (
    <CardContent
      sx={{
        gridColumn: "2",
        gridRow: "1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        textAlign: "start",
        wordBreak: "break-word",
        minHeight: "100%",
      }}
    >
      {children}
    </CardContent>
  );
};

export default BookCardContent;
