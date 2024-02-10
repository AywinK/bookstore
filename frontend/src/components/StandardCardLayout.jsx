/* eslint-disable react/prop-types */
import useMediaQuery from "@mui/material/useMediaQuery";
import Card from "@mui/material/Card";

import { Children, isValidElement, cloneElement } from "react";

const StandardCardLayout = ({ children }) => {
  const isMobile = useMediaQuery("(max-width: 688px)");

  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { isMobile: isMobile });
    }
    return child;
  });

  return (
    <Card
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        gridTemplateRows: "4fr 1fr",
        gap: "10px",
        maxWidth: "600px",
        margin: "auto",
        width: "100%",
        borderRadius: "8px",
        "& > *": {
          padding: "10px 5px 20px",
        },
      }}
      elevation={5}
    >
      {childrenWithProps}
    </Card>
  );
};
export default StandardCardLayout;
