import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { FormatMoney } from "../Helper/Helper";
import { useStore } from "../context";
import TagHeader from "../components/TagHeader";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Info = {
  title: "Giỏ hàng | Thơm Parfum",
  url: "https://thomparfum.vn/gio-hang",
};

const ShoppingCart = () => {
  const { products, getCart } = useStore();
  const [carts, setCarts] = useState<any[]>([]);

  const getOrdered = () => {
    const arrProductIds = getCart();

    const arr: React.SetStateAction<any[]> = [];
    arrProductIds.forEach((item) => {
      products.forEach((element) => {
        if (JSON.parse(item).id === element.id) {
          element.prices.forEach((price) => {
            if (price.capacity === JSON.parse(item).capacity) {
              arr.push({
                ...element,
                prices: price,
                info: JSON.parse(item).info,
                image: element.prices[0].image,
              });
            }
          });
        }
      });
    });

    setCarts(arr);
  };

  console.log(carts);

  useEffect(() => {
    getOrdered();
  }, [products]);
  return (
    <div className="container shopping">
      <TagHeader {...Info} />
      <Breadcrumb>
        <Typography color="text.primary">Đơn hàng bạn đã mua</Typography>
      </Breadcrumb>
      <div className="shopping__section">
        <div className="shopping__title">Tất cả các đơn hàng của bạn</div>
        {carts.length > 0 ? (
          <div>
            {carts.map((item, index) => (
              <div key={index} className="cart">
                <div className="cart__bill">
                  <img
                    src={"https://lh3.googleusercontent.com/d/" + item.image}
                    alt=""
                    className="cart__bill-img"
                  />
                  <div>
                    <div className="cart__bill-title">{item.name}</div>
                    <div className="cart__bill-capacity">
                      {item.prices.capacity}
                    </div>
                  </div>
                  <div className="product__price cart__bill-salePrice">
                    <FormatMoney price={item.prices.salePrice} />
                  </div>
                </div>
                <Accordion className="cart__accordion">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Thông tin đặt hàng</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container spacing={4}>
                      <Grid item md={6} xs={6}>
                        <TextField
                          id="standard-basic"
                          label="Tên"
                          variant="standard"
                          InputProps={{
                            readOnly: true,
                          }}
                          value={item.info.name}
                        />
                      </Grid>
                      <Grid item md={6} xs={6}>
                        <TextField
                          id="standard-basic"
                          label="Số điện thoại"
                          variant="standard"
                          InputProps={{
                            readOnly: true,
                          }}
                          value={item.info.phoneNumber}
                        />
                      </Grid>
                      <Grid item md={12} xs={12}>
                        <TextField
                          id="standard-basic"
                          label="Địa chỉ"
                          variant="standard"
                          InputProps={{
                            readOnly: true,
                          }}
                          value={item.info.address}
                          fullWidth
                        />
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ marginTop: "50px" }}>
            <center>Bạn chưa có đơn đặt hàng nào</center>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
