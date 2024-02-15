import HideHeaderOnScroll from "../components/HideHeaderOnScroll";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ArrowBackIosNewSharpIcon from "@mui/icons-material/ArrowBackIosNewSharp";
import HelpSharpIcon from "@mui/icons-material/HelpSharp";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const CheckoutHeader = ({ pageHeading = "Heading" }) => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  const handleHelpClick = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

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
          <IconButton onClick={handleHelpClick}>
            <HelpSharpIcon fontSize="large" />
          </IconButton>
        </Toolbar>

        {/* Help Modal */}
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "30%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "330px",
              bgcolor: "background.paper",
              border: "5px solid #29b6f6",
              boxShadow: 24,
              p: 2,
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Customer Support
            </Typography>
            <Typography
              id="modal-modal-description"
              color="InfoText"
              variant="body1"
              sx={{ mt: 2 }}
            >
              This is the help content. You can replace it with your actual help
              information.
            </Typography>
          </Box>
        </Modal>
      </AppBar>
    </HideHeaderOnScroll>
  );
};

export default CheckoutHeader;
