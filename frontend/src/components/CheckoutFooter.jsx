import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import GooglePayIcon from "../assets/GooglePay.svg";
import ApplePayIcon from "../assets/ApplePay.svg";
import PayPalIcon from "../assets/PayPal.svg";

const CheckoutFooter = () => {

    return (
        <Stack
            component="footer"
            direction="row"
            sx={{
                margin: "auto",
                maxWidth: "400px",
                justifyContent: "center",
                gap: "15px",
                alignItems: "center",
                padding: "20px 5px",
            }}
        >
            <Typography
                variant="h5"
                component="h4"
            >
                Payment Methods:
            </Typography>
            <img src={GooglePayIcon} alt="Google Pay" />
            <img src={ApplePayIcon} alt="Apple Pay" />
            <img src={PayPalIcon} alt="PayPal" />
        </Stack>
    )
}

export default CheckoutFooter;