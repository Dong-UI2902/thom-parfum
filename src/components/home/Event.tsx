import React from "react";
import { isMobile } from "../../Helper/Helper";
import { useStore } from "../../context";
import { CardProduct } from "../CardProduct";
import SportTitle from "../SportTitle";
import Fade from "react-reveal/Fade";
import { Button, Grid, Link } from "@mui/material";

const Event = () => {
  const { products } = useStore();

  const getSaleProduct = () => {
    return products.filter((item, index) => {
      if (index <= 10) {
        return item.prices[0].status === true;
      }

      return false;
    });
  };

  return (
    <section className="section product">
      <div className="container">
        <SportTitle
          name="Chương trình ưu đãi"
          desc="Chương trình ưu đãi mừng sinh nhật 3 tuổi của Thơm Parfum"
        />
        <div className="product__container">
          <Fade bottom>
            <Grid container spacing={4}>
              {products.length > 0 &&
                getSaleProduct().map((item, index) => {
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

export default Event;
