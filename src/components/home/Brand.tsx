import React from "react";
import SportTitle from "../SportTitle";
import { Box } from "@mui/material";
import Carousel from "react-multi-carousel";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1,
  },
};

const items = [
  "/assets/img/brands/chanel.png",
  "/assets/img/brands/dior.png",
  "/assets/img/brands/gucci.png",
  "/assets/img/brands/versace.png",
  "/assets/img/brands/ysl.png",
  "/assets/img/brands/tomford.png",
];

const Brand = () => {
  return (
    <section className="section container" style={{ position: "relative" }}>
      <SportTitle
        name="Thương hiệu yêu thích"
        desc="Tinh thần tự do, niềm say mê cuộc sống và bản năng kết hợp những điều không thể."
      />
      <Carousel
        responsive={responsive}
        swipeable={true}
        showDots={true}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        arrows={false}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        renderDotsOutside={true}
      >
        {items.map((item, i) => (
          <Box key={i} sx={{ maxWidth: "100px", margin: "1rem auto" }}>
            <img src={item} />
          </Box>
        ))}
      </Carousel>
    </section>
  );
};

export default Brand;
