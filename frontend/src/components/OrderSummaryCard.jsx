import { useBasket } from "../customHooks/useBasket";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const OrderSummaryCard = () => {

    const { basket } = useBasket();

    const deliveryFee = 0;

    const basketSubtotal = basket.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <Paper
            variant="outlined"
            sx={{
                backgroundColor: "#f4f4f4",
                margin: "10px auto",
                width: "min(100%, 325px)",
                border: ".2rem solid #777",
                borderRadius: "4px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "0.25rem 1rem",
                "& > *": {
                    width: "100%"
                }
            }}
        >
            <Typography
                variant="h5"
                textAlign="start"
                textTransform="capitalize"
                fontWeight={700}
                sx={{
                    textDecoration: "underline"
                }}
            >
                Order Summary
            </Typography>

            <Typography
                mt={1}
                mb={1}
                textAlign="start"
                fontWeight={600}
            >
                {basket.length} {basket.length > 1 ? "Items" : "Item"}
            </Typography>

            <Stack
                mt={2}
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}
            >
                <Typography
                    fontWeight={800}
                >
                    Subtotal:
                </Typography>

                <Typography
                    fontWeight={800}
                >
                    {basketSubtotal.toLocaleString("en-GB", { style: "currency", currency: "GBP" })}
                </Typography>
            </Stack>

            <Stack
                mt={2}
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}
            >
                <Typography
                    fontWeight={800}
                >
                    Delivery:
                </Typography>

                <Typography
                    fontWeight={800}
                >
                    {deliveryFee.toLocaleString("en-GB", { style: "currency", currency: "GBP" })}
                </Typography>
            </Stack>

            <Stack
                mt={2}
                mb={4}
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}
            >
                <Typography
                    fontWeight={800}
                >
                    Total to pay:
                </Typography>

                <Typography
                    fontWeight={800}
                >
                    {(deliveryFee + basketSubtotal).toLocaleString("en-GB", { style: "currency", currency: "GBP" })}
                </Typography>
            </Stack>

        </Paper>
    )
}

export default OrderSummaryCard;