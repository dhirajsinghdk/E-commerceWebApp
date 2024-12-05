import React from "react";
import {
  AppBar,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import img2 from "../../Asset/images/img2.jpg";

const Login = () => {
  return (
    <>
      <AppBar container maxWidth="xs">
        <Grid container sx={{ height: "100vh" }}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "4",
            }}
          >
            <Box
              sx={{
                width: "100%",
                marginTop: "8",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#094945",
                justifyContent: "center",
                height: "100vh",
              }}
            >
              <Typography
                variant="h4"
                component="h1"
                gutterButton
                borderColor="white"
              >
                Login
              </Typography>

              <Box component="form" noValidate sx={{ mt: 4 }}>
                <Typography marginTop={5}>Email Adress:</Typography>
                <TextField
                  fullWidth
                  label="Email Address"
                  variant="outlined"
                  margin="normal"
                  sx={{ backgroundColor: "#333" }}
                >
                  <AccountCircleIcon />
                </TextField>
                <Typography marginTop={5}>PassWord:</Typography>
                <TextField
                  fullWidth
                  label="Enter Your password "
                  variant="outlined"
                  margin="normal"
                  type="password"
                  sx={{ backgroundColor: "#333" }}
                />
                <Button
                  type="Submit"
                  variant="container"
                  aria-label="Basic button group"
                  fullWidth
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign IN
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: { xs: "none", md: "block" },
              backgroundImage: `url(${img2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Grid>
        </Grid>
      </AppBar>
    </>
  );
};
export default Login;
