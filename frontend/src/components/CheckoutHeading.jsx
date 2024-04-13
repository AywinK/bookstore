import Typography from "@mui/material/Typography";

// eslint-disable-next-line react/prop-types
export const CheckoutHeading = ({heading}) => {
    return (
        <Typography
            variant="h4"
            component="h2"
            sx={{
                textDecoration: "underline",
                fontWeight: "600"
            }}
        >
            {heading}
        </Typography>
    )
}
