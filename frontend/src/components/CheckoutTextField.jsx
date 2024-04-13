/* eslint-disable react/prop-types */
import TextField from "@mui/material/TextField";
import { useField } from "formik";

const CheckoutTextField = ({ label, name, type = "text", inputMode = null }) => {

    const [field, meta] = useField(name);

    const {
        value,
        touched,
        error
    } = meta;

    const {
        onChange,
        onBlur
    } = field;

    return (
        <TextField
            InputProps={{
                style: {
                    borderRadius: "16px"
                }
            }}
            inputMode={inputMode && inputMode}
            fullWidth
            type={type}
            id={name}
            name={name}
            label={label}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            error={touched && Boolean(error)}
            helperText={touched && error}
        >
        </TextField >
    )
}

export default CheckoutTextField;