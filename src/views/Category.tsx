import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { Box, Grid, Typography } from "@mui/material";
import "../styles/Category.scss";
import { useStore } from "../context";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { ProductProps } from "../context/types";
import { CardProduct } from "../components/CardProduct";
import Filter from "../components/category/Filter";
import TagHeader from "../components/TagHeader";
import Link from "../components/Link";
import FlashSale from "../components/FlashSale";
import CategoryList from "../components/CategoryList";
import { isMobile } from "../Helper/Helper";

const Category = () => {
  const { products, getProductsByKey } = useStore();
  const { key } = useParams();
  const [data, setData] = useState<ProductProps[]>([]);
  const [temp, setTemp] = useState<ProductProps[]>([]);
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const text = searchParams.get("search");

  const setDataWithKey = (key: string, value: string | boolean) => {
    setData(getProductsByKey(key, value));
  };

  const getSaleProduct = () => {
    setData(products.filter((item) => item.prices[0].salePrice !== ""));
  };

  const getNameCategory = () => {
    switch (key) {
      case "tat-ca-san-pham":
        return "Tất Cả Sản Phẩm";
      case "nuoc-hoa-nam":
        return "Nước Hoa Nam";
      case "nuoc-hoa-nu":
        return "Nước Hoa Nữ";
      case "nuoc-hoa-unisex":
        return "Nước Hoa Unisex";
      case "yeu-thich-nhat":
        return "Yêu Thích Nhất";
      case "san-pham-moi":
        return "Sản Phẩm Mới";
      default:
        return `Tìm kiếm Sản Phẩm Cho "${text}"`;
    }
  };

  const choiceCategory = () => {
    switch (key) {
      case "tat-ca-san-pham":
        return setData(products);
      case "nuoc-hoa-nam":
        return setDataWithKey("gender", "nam");
      case "nuoc-hoa-nu":
        return setDataWithKey("gender", "nữ");
      case "nuoc-hoa-unisex":
        return setDataWithKey("gender", "UNISEX");
      case "san-pham-moi":
        return setDataWithKey("isNew", true);
      case "yeu-thich-nhat":
        return setDataWithKey("isHot", true);
      default:
        return null;
    }
  };

  useEffect(() => {
    if (text) {
      const newArr = products.filter((item) => {
        return (
          item.name.toUpperCase().search(text.toUpperCase()) >= 0 ||
          item.brand.toUpperCase().search(text.toUpperCase()) >= 0
        );
      });

      return setData(newArr);
    } else {
      choiceCategory();
    }
  }, [products, pathname, text]);

  // React.useEffect(() => {
  //   getUrl();
  // }, [data]);

  // const getUrl = () => {
  //   let str = "";
  //   for (let index = 0; index < data.length; index++) {
  //     const element = data[index];
  //     str = str.concat(
  //       `<url><loc>https://thomparfum.vn/product/${element.slug}</loc><lastmod>2023-12-01T10:07:20+00:00</lastmod></url>`
  //     );
  //   }

  //   console.log(str);
  // };

  return (
    <div className="category container">
      <TagHeader
        title={`${getNameCategory()} - Thơm Parfum`}
        desc="Cửa hàng nước hoa Nam chính hãng (Nước hoa chiết Nam) tại Thơm Parfum, chuyên bán các loại nước hoa chiết Nam, fullbox chính hãng"
        url={`https://thomparfum.vn/category/${key}`}
      />
      <Breadcrumb>
        <Typography color="text.primary">{getNameCategory()}</Typography>
      </Breadcrumb>
      <section className="category__container">
        <Box flexGrow={1} minHeight="80vh">
          {/* <Grid container spacing={2.5} justifyContent="space-between">
            <Grid item xs={12} md={2.5} className="category__filter">
              <Filter {...{ temp, data, setTemp }} />
            </Grid>
            <Grid item xs={12} md={9.5} className="category__product"></Grid>
          </Grid> */}
          <img
            className="category__image"
            src={`/assets/img/${isMobile() ? "category2" : "category"}.jpg`}
          />
          <Box className="category__product" sx={{ marginTop: 4 }}>
            {/* <div className="category__title">{`${getNameCategory()}`}</div> */}
            <CategoryList data={data} />
          </Box>
        </Box>
      </section>
    </div>
  );
};

export default Category;
