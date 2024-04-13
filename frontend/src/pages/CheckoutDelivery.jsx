import * as yup from "yup";
import { Form, Formik } from "formik";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { CheckoutHeading } from "../components/CheckoutHeading";
import CheckoutTextField from "../components/CheckoutTextField";


const validationSchema = yup.object({
  firstName: yup.string().required("Please provide a name").min(1),
  lastName: yup.string(),
  email: yup.string().email("Please enter a valid email address").required("Email is required"),
  phone: yup.string().max(13).matches(/^\d+$/, "Please enter a valid phone number containing only digits 0-9"),
  addressLine1: yup.string().required("Provide a valid street address"),
  addressLine2: yup.string(),
  postcode: yup.string().required("Provide a valid postcode"),
  deliveryOption: yup.string().required("You must select a delivery option")
});

const initialFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  postcode: "",
  deliveryOption: "first class"
};

const CheckoutDelivery = () => {
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
            }}
          >
            <CheckoutHeading heading="Personal Details" />
            <CheckoutTextField name="firstName" label="First Name" />
            <CheckoutTextField name="lastName" label="Last Name" />
            <CheckoutTextField name="email" label="Email" />
            <CheckoutTextField name="phone" label="Phone Number" />


            <CheckoutHeading heading="Delivery Address" />
            <CheckoutTextField name="addressLine1" label="Address Line 1" />
            <CheckoutTextField name="addressLine2" label="Address Line 2" />
            <CheckoutTextField name="postcode" label="Postcode" />

            <CheckoutHeading heading="Delivery Options" />
            <RadioGroup value={formik.values.deliveryOption} onChange={e => formik.setFieldValue("deliveryOption", e.target.value)}>
              <FormControlLabel
                value="first class"
                control={<Radio />}
                label="First Class"
              />
              <FormControlLabel
                value="second class"
                control={<Radio />}
                label="Second Class"
              />
            </RadioGroup>

            <Button
              disabled={!(formik.dirty && formik.isValid)}
              type="submit"
              variant="contained"
              sx={{
                margin: "auto",
                maxWidth: "300px"
              }}
            >Next: PAYMENT</Button>
          </Stack>
        </Form>
      )}
    </Formik>
  )
};

export default CheckoutDelivery;
