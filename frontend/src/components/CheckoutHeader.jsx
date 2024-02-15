import HideHeaderOnScroll from "../components/HideHeaderOnScroll";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ArrowBackIosNewSharpIcon from "@mui/icons-material/ArrowBackIosNewSharp";
import HelpSharpIcon from "@mui/icons-material/HelpSharp";

import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CheckoutHeader = ({ pageHeading = "Heading" }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <HideHeaderOnScroll>
      <AppBar position="fixed" id="header">
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Back button */}
          <IconButton onClick={handleGoBack}>
            <ArrowBackIosNewSharpIcon fontSize="large" />
          </IconButton>

          {/* Heading */}
          <Typography
            sx={{ textTransform: "uppercase" }}
            flexGrow={1}
            variant="h4"
            component="h2"
          >
            {pageHeading}
          </Typography>

          {/* Help button */}
          <IconButton>
            <HelpSharpIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </HideHeaderOnScroll>
  );
};

export default CheckoutHeader;
