import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
} from "@mui/material";
import ProductData from "./ProductData";
const Product = () => {
  return (
    <Box sx={{ padding: "40px", marginTop: "50px", backgroundColor: "#333" }}>
      <Typography
        variant="h5"
        align="center"
        color="white"
        sx={{ marginBottom: "20px" }}
      >
        Product List
      </Typography>
      <Grid container spacing={3}>
        {ProductData.map((product) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={product.id}
            sx={{ background: "#333" }}
          >
            <Card
              sx={{ maxWidth: 345, boxShadow: 3, backgroundColor: "#59bbd8" }}
            >
              <CardMedia
                marginTop="10px"
                component="img"
                height="200"
                image={product.img}
                alt={product.name}
                sx={{ objectFit: "contain" }}
              />
              <CardContent>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", marginBottom: "8px" }}
                >
                  {product.name}
                </Typography>
                <Typography
                  variant="h6"
                  color="red"
                  sx={{ marginBottom: "8px" }}
                >
                  {product.price}
                </Typography>
                <Grid container justifyContent="space-around">
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#333",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#33333",
                      },
                    }}
                  >
                    Add To Cart
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#333",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#33333",
                      },
                    }}
                  >
                    Buy Now
                  </Button>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Product;
