import {
  AppBar,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import img1 from "../../Asset/images/img1.jpg";

const SignUp = () => {
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
                SignUp
              </Typography>

              <Box component="form" noValidate sx={{ mt: 4 }}>
                <Typography>Full Name</Typography>
                <TextField
                  fullWidth
                  label="Enter Full Name"
                  type="text"
                  variant="outlined"
                  margin="normal"
                  sx={{ backgroundColor: "#333" }}
                ></TextField>
                <Typography>Address</Typography>
                <TextField
                  fullWidth
                  label="Enter Address"
                  type="text"
                  variant="outlined"
                  margin="normal"
                  sx={{ backgroundColor: "#333" }}
                ></TextField>
                <Typography>Contact No.</Typography>
                <TextField
                  fullWidth
                  label="Phone no."
                  type="number"
                  variant="outlined"
                  margin="normal"
                  sx={{ backgroundColor: "#333" }}
                ></TextField>
                <Typography>PassWord:</Typography>
                <TextField
                  fullWidth
                  label="Enter Your password "
                  variant="outlined"
                  margin="normal"
                  type="password"
                  sx={{ backgroundColor: "#333" }}
                />
                <Typography>Conform PassWord:</Typography>
                <TextField
                  fullWidth
                  label="Conform password "
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
              backgroundImage: `url(${img1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Grid>
      </AppBar>
    </>
  );
};

export default SignUp;
