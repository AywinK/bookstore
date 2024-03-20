/* eslint-disable react/prop-types */
import useMediaQuery from "@mui/material/useMediaQuery";
import Card from "@mui/material/Card";

import { Children, isValidElement, cloneElement } from "react";

const StandardCardLayout = ({ children }) => {
  const isMobile = useMediaQuery("(max-width: 688px)");

  const renderChildrenWithProps = (children) => {
    return Children.map(children, (child) => {
      if (isValidElement(child)) {
        // Check if the child has nested children
        if (child.props.children) {
          // Recursively render nested children with props
          const nestedChildrenWithProps = renderChildrenWithProps(
            child.props.children
          );
          // Clone the child element and pass the isMobile prop along with nested children
          return cloneElement(
            child,
            { isMobile: isMobile },
            nestedChildrenWithProps
          );
        } else {
          // Clone the child element and pass the isMobile prop
          return cloneElement(child, { isMobile: isMobile });
        }
      }
      return child;
    });
  };

  return (
    <Card
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        gridTemplateRows: "4fr 1fr",
        gap: "10px",
        maxWidth: "600px",
        marginLeft: "auto",
        marginRight: "auto",
        width: "100%",
        borderRadius: "8px",
        "& > *": {
          padding: "10px 5px 20px",
        },
      }}
      elevation={5}
    >
      {renderChildrenWithProps(children)}
    </Card>
  );
};
export default StandardCardLayout;
