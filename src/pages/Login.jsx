import { Container, Typography, Box, TextField, Button } from "@mui/material";
import { Formik } from "formik";
import { loginSchema } from "../components/LoginForm";

const Login = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          border: "4px solid #ccc",
          borderRadius: "8px",
          padding: "20px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          transition: "box-shadow 0.3s",
          "&:hover": {
            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <Typography variant="h5" mb={2}>
          Login
        </Typography>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={(values, actions) => {
            const { setSubmitting } = actions;
            setTimeout(() => {
              setSubmitting(false);
            }, 400);
            console.log(values, actions);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <Box mb={2} sx={{ position: "relative" }} style={{marginTop:"20px"}}>
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  error={touched.email && Boolean(errors.email)}
                />
                {touched.email && errors.email && (
                  <Typography
                    sx={{ position: "absolute", bottom: -35, color: "red" }}
                  >
                    {errors.email}
                  </Typography>
                )}
              </Box>
              <Box mb={2} sx={{ position: "relative" }} style={{ marginBottom:"50px", marginTop:"50px"}}>
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  error={touched.password && Boolean(errors.password)}
                />
                {touched.password && errors.password && (
                  <Typography
                    sx={{ position: "absolute", bottom: -35, color: "red" }}
                  >
                    {errors.password}
                  </Typography>
                )}
              </Box>

              <Box textAlign="center">
                <Button
                  variant="contained"
                  type="submit"
                  disabled={isSubmitting}
                  sx={{width:"50%"}}
                >
                  Submit
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Container>
    </Box>
  );
};

export default Login;
