import { Box, Grid } from "@mui/material";
import React from "react";
import { CardProduct } from "./CardProduct";
import { ProductProps } from "../context/types";

const CategoryList: React.FC<{
  data: ProductProps[];
}> = ({ data }) => {
  return (
    <>
      {data.length > 0 ? (
        <Box flexGrow={1} className="product">
          <Grid container spacing={3} mt={1}>
            {data.map((item) => (
              <Grid key={item.id} item xs={6} md={3}>
                <CardProduct {...item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            height: "100%",
            textAlign: "center",
          }}
        >
          <p>Không có sản phẩm nào phù hợp</p>
        </Box>
      )}
    </>
  );
};

export default CategoryList;
