import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useStore } from "../context";
import { ProductProps } from "../context/types";
import { Box, Typography } from "@mui/material";
import Breadcrumb from "../components/Breadcrumb";
import TagHeader from "../components/TagHeader";
import CategoryList from "../components/CategoryList";
import FlashSale from "../components/FlashSale";

const Sale = () => {
  const { products } = useStore();
  const [data, setData] = React.useState<ProductProps[]>([]);
  const [temp, setTemp] = React.useState<ProductProps[]>([]);
  const { pathname } = useLocation();

  const getSaleProduct = () => {
    // const temp = products.filter((item) => item.prices[0].salePrice !== "");
    setData(products.filter((item) => item.prices[0].salePrice !== ""));
    // setData(
    //   temp.sort((a, b) => {
    //     if (!a.prices[0].status && b.prices[0].status) {
    //       return 1;
    //     }

    //     if (a.prices[0].status && !b.prices[0].status) {
    //       return -1;
    //     }

    //     return -1;
    //   })
    // );
  };

  React.useEffect(() => {
    getSaleProduct();
  }, [products, pathname]);

  return (
    <div className="category container">
      <TagHeader
        title={"Chương Trình Ưu Đãi - Thơm Parfum"}
        desc="Cửa hàng nước hoa Nam chính hãng (Nước hoa chiết Nam) tại Thơm Parfum, chuyên bán các loại nước hoa chiết Nam, fullbox chính hãng"
        url={"https://thomparfum.vn/category/chuong-trinh-uu-dai"}
      />
      <Breadcrumb>
        <Typography color="text.primary">Chương trình ưu đãi</Typography>
      </Breadcrumb>
      <section className="category__container">
        <Box flexGrow={1} minHeight="80vh">
          {/* <Grid container spacing={2.5} justifyContent="space-between">
            <Grid item xs={12} md={2.5} className="category__filter">
              <Filter {...{ temp, data, setTemp }} />
            </Grid>
            <Grid item xs={12} md={9.5} className="category__product"></Grid>
          </Grid> */}
          <FlashSale />
          <Box className="category__product" sx={{ marginTop: 4 }}>
            <CategoryList data={data} />
          </Box>
        </Box>
      </section>
    </div>
  );
};

export default Sale;
