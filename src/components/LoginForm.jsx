import { Button, TextField } from "@mui/material";
import { Form } from "formik";
import { string, object } from "yup";

export const loginSchema = object({
  email: string().email().required("Email is required"),
  password: string()
    .required("Password is required")
    .min(8, "Minimum 8 karakter olmalidir")
    .max(20, "Maximum 20 karakter olmalidir")
    .matches(/\d+/, "Password rakam icermelidir")
    .matches(/[a-z]/, "Password kücük harf icermelidir")
    .matches(/[A-Z]/, "Password büyük harf icermelidir")
    .matches(/[!,?{}><%&$#£+-.]+/, "Password bir özel karakter icermelidir"),
});

const LoginForm = ({ values, handleChange, errors, touched, handleBlur }) => {
  return (
    <Form>
      <TextField
        label="email"
        name="email"
        id="email"
        type="email"
        variant="outlined"
        onChange={handleChange}
        value={{ ...values.email }}
        onBlur={handleBlur}
        helperText={touched.email && errors.email}
        error={touched.email && Boolean(errors.email)}
      />
      <TextField
        label="password"
        name="password"
        id="password"
        type="password"
        variant="outlined"
        onChange={handleChange}
        value={{ ...values.password }}
        onBlur={handleBlur}
        helperText={touched.password && errors.password}
        error={touched.password && Boolean(errors.password)}
      />
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LoginForm;
