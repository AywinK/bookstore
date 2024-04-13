import * as yup from "yup";
import { Form, Formik } from "formik";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";

const validationSchema = yup.object().shape({
  cardholderName: yup.string().required("Please provide the cardholder's name").min(1),
  cardNumber: yup.string().required("Please provide a card number").matches(/^\d{16}$/, "Please enter a valid 16-digit card number"),
  expiryDate: yup.string().required("Please provide the expiry date").matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Please enter a valid expiry date in the format MM/YY"),
  securityCode: yup.string().required("Please provide the security code").matches(/^\d{3}$/, "Please enter a valid 3-digit security code"),
  addressLine1: yup.string().required("Please provide the address line 1"),
  addressLine2: yup.string(),
  postcode: yup.string().required("Please provide the postcode"),
  paymentOption: yup.string().required("Please select a payment option"),
  isAddressSame: yup.boolean(),
});

const initialFormValues = {
  cardholderName: "",
  cardNumber: "",
  expiryDate: "",
  securityCode: "",
  addressLine1: "placeholder",
  addressLine2: "",
  postcode: "placeholder",
  paymentOption: "credit/debit",
  isAddressSame: true,
};

const CheckoutPayment = () => {
  return (
    <Formik
      initialValues={initialFormValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
      }}
    >
      {(formik) => (
        <Form>
          <Stack
            maxWidth={400}
            gap={2}
            sx={{
              border: "0.2rem solid red",
              margin: "auto",
              padding: "15px",
              "& .MuiTextField-root": {
                // border: "1rem solid red",
                // borderRadius: "40px",
                "& input": {
                  // border: "1rem solid red",
                  // borderRadius: "40px"
                }
              }
            }}
          >

            <Typography
              variant="h4"
              component="h2"
              sx={{
                textDecoration: "underline",
                fontWeight: "600"
              }}
            >
              Payment Options
            </Typography>
            <RadioGroup defaultValue="credit/debit" value={formik.values.deliveryOption} onChange={e => formik.setFieldValue("deliveryOption", e.target.value)}>
              <FormControlLabel
                value="credit/debit"
                control={<Radio />}
                label="Credit/Debit Card"
              />
              <FormControlLabel
                value="google"
                control={<Radio />}
                disabled
                label="Google Pay"
              />
              <FormControlLabel
                value="apple"
                control={<Radio />}
                disabled
                label="Apple Pay"
              />
              <FormControlLabel
                value="paypal"
                control={<Radio />}
                disabled
                label="PayPal"
              />
            </RadioGroup>

            <Typography
              variant="h4"
              component="h2"
              sx={{
                textDecoration: "underline",
                fontWeight: "600"
              }}
            >
              Card Details
            </Typography>
            <TextField
              InputProps={{
                style: {
                  borderRadius: "16px"
                }
              }}
              fullWidth
              inputMode="numeric"
              id="cardholderName"
              name="cardholderName"
              label="Cardholder Name"
              value={formik.values.cardholderName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.cardholderName && Boolean(formik.errors.cardholderName)}
              helperText={formik.touched.cardholderName && formik.errors.cardholderName}
            >
            </TextField>
            <TextField
              InputProps={{
                style: {
                  borderRadius: "16px"
                }
              }}
              fullWidth
              inputMode="numeric"
              id="cardNumber"
              name="cardNumber"
              label="Card Number"
              value={formik.values.cardNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.cardNumber && Boolean(formik.errors.cardNumber)}
              helperText={formik.touched.cardNumber && formik.errors.cardNumber}
            >
            </TextField>
            <TextField
              InputProps={{
                style: {
                  borderRadius: "16px"
                }
              }}
              fullWidth
              id="expiryDate"
              name="expiryDate"
              label="Expiry Date"
              value={formik.values.expiryDate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.expiryDate && Boolean(formik.errors.expiryDate)}
              helperText={formik.touched.expiryDate && formik.errors.expiryDate}
            >
            </TextField>
            <TextField
              InputProps={{
                style: {
                  borderRadius: "16px"
                }
              }}
              fullWidth
              inputMode="numeric"
              id="securityCode"
              name="securityCode"
              label="Security Code"
              value={formik.values.securityCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.securityCode && Boolean(formik.errors.securityCode)}
              helperText={formik.touched.securityCode && formik.errors.securityCode}
            >
            </TextField>

            <FormGroup>
              <FormControlLabel
                control={<Checkbox
                  disabled
                  onChange={e => formik.setFieldValue("isAddressSame", e.target.checked)}
                  checked={formik.values.isAddressSame}
                />}
                label="Use delivery address as billing address"
              />
            </FormGroup>

            <Button
              type="submit"
              variant="contained"
              sx={{
                margin: "auto",
                maxWidth: "300px"
              }}
            >Pay</Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default CheckoutPayment;
