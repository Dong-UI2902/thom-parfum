import React, { useEffect, useRef, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import {
  Box,
  Button,
  ButtonProps,
  Divider,
  Grid,
  Rating,
  Typography,
  styled,
} from "@mui/material";
import { PriceProps } from "../context/types";
import { useStore } from "../context/Provider";
import { useParams } from "react-router-dom";
import { FormatMoney, apartFrom } from "../Helper/Helper";
import Link from "../components/Link";
import TagHeader from "../components/TagHeader";

export const CustomBtn = styled(Button)<ButtonProps>(({ theme }) => ({
  paddingTop: "15px",
  paddingBottom: "15px",
  textTransform: "none",
  fontSize: "var(--normal-font-size)",
}));

const Product = () => {
  const [value, setValue] = React.useState<number | null>(4);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string>();
  const carouselItemsRef = useRef<HTMLDivElement[] | null[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [index, setIndex] = useState<number>(0);

  const { products, product, getProductBySlug } = useStore();
  const { slug } = useParams();

  useEffect(() => {
    if (products) {
      getProductBySlug(slug || "");
    }
  }, [products]);

  useEffect(() => {
    if (product.id) {
      setImages([product.prices[0].image, ...product.images]);

      const output = document.getElementById("desc");
      if (output) output.innerHTML = product.description;
    }
  }, [product]);

  useEffect(() => {
    if (images && images.length > 0) {
      setSelectedImage(images[selectedImageIndex]);
      if (carouselItemsRef?.current[selectedImageIndex]) {
        carouselItemsRef?.current[selectedImageIndex]?.scrollIntoView({
          inline: "center",
          behavior: "smooth",
          block: "end",
        });
      }
    }
  }, [selectedImageIndex]);

  useEffect(() => {
    if (images && images[0]) {
      carouselItemsRef.current = carouselItemsRef.current.slice(
        0,
        images.length
      );

      setSelectedImageIndex(0);
      setSelectedImage(images[0]);
    }
  }, [images]);

  const handleClick = (indx: number) => {
    setIndex(indx);
  };

  const handleUrl = () => {
    switch (product.gender) {
      case "nam":
        return "nuoc-hoa-nam";
      case "nữ":
        return "nuoc-hoa-nu";
      default:
        return "nuoc-hoa-unisex";
    }
  };

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: any) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: any) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      if (selectedImageIndex < images.length - 1) {
        setSelectedImageIndex((prev) => prev + 1);
      }
    } else {
      if (selectedImageIndex > 0) {
        setSelectedImageIndex((prev) => prev - 1);
      }
    }
  };

  return (
    <div className="product container">
      <TagHeader
        title={`Nước hoa ${product.name} | Thơm Parfum`}
        desc={`Nước hoa ${product.gender} chính hãng ${product.name}. Có đầy đủ chiết và fullbox với giá tiết kiệm nhất`}
        url={`https://thomparfum.com/${handleUrl()}/${product.name}`}
      />
      <Breadcrumb>
        <Link
          underline="hover"
          color="inherit"
          href={`/category/${handleUrl()}`}
        >
          Nước Hoa {product.gender}
        </Link>
        <Typography color="text.primary">{product.name}</Typography>
      </Breadcrumb>
      <div className="view">
        <Box flexGrow={1}>
          <Grid container spacing={2} justifyContent="space-between">
            <Grid item md={5} xs={12}>
              <div className="view__image">
                <img
                  src={"https://lh3.googleusercontent.com/d/" + selectedImage}
                  alt={"ảnh sản phẩm"}
                  onTouchStart={onTouchStart}
                  onTouchMove={onTouchMove}
                  onTouchEnd={onTouchEnd}
                />
                <div className="carousel">
                  <div className="carousel__images">
                    {images &&
                      images.map((image, idx) => (
                        <div
                          onClick={() => setSelectedImageIndex(idx)}
                          style={{
                            backgroundImage: `url(https://lh3.googleusercontent.com/d/${image})`,
                          }}
                          key={idx}
                          className={`carousel__image ${
                            selectedImageIndex === idx &&
                            "carousel__image-selected"
                          }`}
                          ref={(el) => (carouselItemsRef.current[idx] = el)}
                        />
                      ))}
                  </div>
                </div>
              </div>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              alignItems="center"
              display="flex"
              justifyContent="center"
            >
              <div className="view__detail">
                <div>
                  <div className="view__detail-title">{product.name}</div>

                  <Box flexGrow={1} className="view__detail-rating">
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                    <p>Viết đánh giá của bạn</p>
                  </Box>
                  <Box
                    flexGrow={1}
                    display="flex"
                    justifyContent="space-between"
                  >
                    <div>
                      Thương hiệu:{" "}
                      <Link
                        href={`/category/tim-kiem-san-pham?search=${product.brand}`}
                      >
                        {product.brand}
                      </Link>
                    </div>
                    <div>Giới tính: {product.gender}</div>
                  </Box>
                </div>
                <Divider />
                <div className="view__detail-price">
                  <div>
                    Giá:{" "}
                    <label>
                      <FormatMoney
                        price={
                          product.prices[index]?.salePrice
                            ? product.prices[index]?.salePrice
                            : product.prices[index]?.price
                        }
                      />
                    </label>
                  </div>
                  <div>
                    {product.prices[index]?.salePrice && (
                      <p className="view__price-thitruong">
                        Giá thị trường:{" "}
                        <FormatMoney price={product.prices[index]?.price} /> -
                        Tiết kiệm:{" "}
                        <FormatMoney price={apartFrom(product, index)} />
                      </p>
                    )}
                  </div>
                  <div>
                    Tình trạng:{" "}
                    <label
                      className={`${
                        product.prices[index]?.status ? "in" : "out"
                      }`}
                    >
                      {product.prices[index]?.status ? "Còn hàng" : "Hết hàng"}
                    </label>
                  </div>
                </div>
                <Divider />
                <div>
                  <div>Lựa chọn size</div>
                  <div className="view__standard">
                    {product.prices.map((item: PriceProps, indx) => (
                      <div
                        className={`view__standard-card ${
                          index === indx && "active"
                        }`}
                        key={indx}
                        onClick={() => handleClick(indx)}
                      >
                        <img
                          src={`https://lh3.googleusercontent.com/d/${
                            item.capacity !== "10ml"
                              ? item.image
                              : "12xNMfR8ok8jI0VFlyddUDcyQpTRstynq"
                          }`}
                        />
                        <div className={`${!item.status && "outProd"}`}>
                          {product.name + " " + item?.capacity}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <Divider />
                <div className="view__shipping">
                  <div>
                    <i className="ri-truck-line"></i>
                    <div>Freeship toàn quốc</div>
                  </div>
                  <div>
                    <i className="ri-shield-check-line"></i>
                    <div>Chính hãng 100%</div>
                  </div>
                  <div>
                    <i className="ri-refund-line"></i>
                    <div>Miễn phí đổi trả</div>
                  </div>
                </div>
                <Divider />
                <CustomBtn
                  fullWidth
                  variant="contained"
                  color="primary"
                  component={Link}
                  href={
                    product?.prices[index]?.status
                      ? "/checkout/" +
                        product.slug +
                        "?size=" +
                        product?.prices[index]?.capacity
                      : "#"
                  }
                  disabled={!product?.prices[index]?.status}
                >
                  Mua ngay
                </CustomBtn>
              </div>
            </Grid>
          </Grid>
        </Box>
        <Box flexGrow={1} className="view__info">
          <div className="view__info-title">Mô tả chi tiết</div>
          <Divider />
          <div id="desc" style={{ marginTop: "20px" }}></div>
        </Box>
      </div>
    </div>
  );
};

export default Product;
