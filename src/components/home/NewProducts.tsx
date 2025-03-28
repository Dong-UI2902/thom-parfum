import React from "react";
import SportTitle from "../SportTitle";
import { useStore } from "../../context";
import Fade from "react-reveal/Fade";
import { Button, Grid, Link } from "@mui/material";
import { CardProduct } from "../CardProduct";

const NewProducts = () => {
  const { getProductsByKey, products } = useStore();

  return (
    <section className="section product">
      <div className="container">
        <SportTitle
          name="Sản phẩm mới"
          desc="Danh sách sản phẩm mới nhất được cập nhật trong bộ sưu tập nước hoa Thơm Parfum"
        />
        <div className="product__container">
          <Fade bottom>
            <Grid container spacing={3.5}>
              {products.length > 0 &&
                getProductsByKey("isNew", true).map((item, index) => {
                  if (index < 4) {
                    return (
                      <Grid item md={3} xs={6} key={item.id}>
                        <CardProduct {...item}></CardProduct>
                      </Grid>
                    );
                  }
                })}
            </Grid>
            <center style={{ marginTop: 20, display: "block" }}>
              <Button
                component={Link}
                href="/category/san-pham-moi"
                className="btn-primary"
                variant="outlined"
                color="primary"
                endIcon={<i className="ri-arrow-right-up-line"></i>}
              >
                Xem thêm
              </Button>
            </center>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default NewProducts;
