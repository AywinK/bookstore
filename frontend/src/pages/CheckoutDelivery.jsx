import * as yup from "yup";
import { Formik } from "formik";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


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
        // setSubmitting(false);
      }}
    >
      {(formik) => (
        <form
          onSubmit={formik.handleSubmit}
        >
          <Stack
            marginTop={10}
            marginBottom={5}
            gap={2}
            sx={{
              padding: "10px",
              "& .MuiTextField-root": {
                // border: "1rem solid red",
                borderRadius: "40px",
                "& input": {
                  // border: "1rem solid red",
                  borderRadius: "40px"
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
              Personal Details
            </Typography>
            <TextField
              InputProps={{
                style: {
                  borderRadius: "16px"
                }
              }}
              fullWidth
              id="firstName"
              name="firstName"
              label="First Name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.firstName && Boolean(formik.errors.firstName)}
              helperText={formik.touched.firstName && formik.errors.firstName}
            >
            </TextField>
            <TextField
              InputProps={{
                style: {
                  borderRadius: "16px"
                }
              }}
              fullWidth
              id="lastName"
              name="lastName"
              label="Last Name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            >
            </TextField>
            <TextField
              InputProps={{
                style: {
                  borderRadius: "16px"
                }
              }}
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            >
            </TextField>
            <TextField
              InputProps={{
                style: {
                  borderRadius: "16px"
                }
              }}
              fullWidth
              id="phone"
              name="phone"
              label="Phone number"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            >
            </TextField>
            <Button
              type="submit"
              variant="contained"
              sx={{
                margin: "auto",
                maxWidth: "300px"
              }}
            >PAYMENT</Button>
          </Stack>
        </form>
      )}
    </Formik>
  )
};

export default CheckoutDelivery;
