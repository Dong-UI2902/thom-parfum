import React from "react";
import SportTitle from "../SportTitle";
import { useStore } from "../../context";
import Fade from "react-reveal/Fade";
import { CardProduct } from "../CardProduct";
import { Button, Grid, Link } from "@mui/material";
import { isMobile } from "../../Helper/Helper";

export const Popular = () => {
  const { getProductsByKey, products } = useStore();

  return (
    <section className="section product">
      <div className="container">
        <SportTitle
          name="Yêu thích nhất"
          desc="Danh sách sản phẩm bán chạy, sản phẩm hot trong bộ sưu tập Thơm Parfum"
        />
        <div className="product__container">
          <Fade bottom>
            <Grid container spacing={4}>
              {products.length > 0 &&
                getProductsByKey("isHot", true).map((item, index) => {
                  const limit = isMobile() ? 5 : 3;
                  if (index <= limit) {
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
                href="/category/yeu-thich-nhat"
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
