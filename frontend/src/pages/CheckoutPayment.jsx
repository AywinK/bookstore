import * as yup from "yup";
import { Form, Formik } from "formik";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import { CheckoutHeading } from "../components/CheckoutHeading";
import CheckoutTextField from "../components/CheckoutTextField";
import OrderSummaryCard from "../components/OrderSummaryCard";

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
              margin: "auto",
              padding: "15px",
            }}
          >

            <CheckoutHeading heading="Payment Options" />
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

            <CheckoutHeading heading="Card Details" />
            <CheckoutTextField name="cardholderName" label="Cardholder Name" inputMode="numeric" />
            <CheckoutTextField name="cardNumber" label="Card Number" inputMode="numeric" />
            <CheckoutTextField name="expiryDate" label="Expiry Date" />
            <CheckoutTextField name="securityCode" label="Security Code" inputMode="numeric" />

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

            <OrderSummaryCard />

            <Button
              disabled={!(formik.dirty && formik.isValid)}
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
