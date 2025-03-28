import React from "react";
import { ButtonBase, Grid, Typography, styled } from "@mui/material";
import Link from "../Link";
import Fade from "react-reveal/Fade";
import config from "react-reveal/globals";

config({ ssrFadeout: true });

const Items = [
  {
    name: "Nước hoa nữ",
    href: "/category/nuoc-hoa-nu",
    image: "/assets/img/nuoc-hoa-nu.jpg",
  },
  {
    name: "Nước hoa nam",
    href: "/category/nuoc-hoa-nam",
    image: "/assets/img/nuoc-hoa-nam.jpg",
  },
  {
    name: "Nước hoa unisex",
    href: "/category/nuoc-hoa-unisex",
    image: "/assets/img/nuoc-hoa-unisex.jpg",
  },
];

const Collection = () => {
  const text = {
    position: "relative",
    p: 4,
    pt: 2,
    pb: (theme: any) => `calc(${theme.spacing(1)} + 6px)`,
    fontFamily: "var(--body-font)",
  };

  return (
    <section className="collection section container">
      <Fade bottom>
        <Grid container spacing={1.5}>
          {Items.map((item, index) => (
            <Grid key={index} item md={4} xs={12}>
              <Link href={item.href}>
                <ImageButton
                  focusRipple
                  style={{
                    width: "100%",
                    height: 410,
                  }}
                >
                  <ImageSrc
                    style={{
                      backgroundImage: `url("${item.image}")`,
                      backgroundPosition: index === 2 ? "bottom" : "center",
                    }}
                  />
                  <ImageBackdrop className="MuiImageBackdrop-root" />
                  <Image>
                    <Typography
                      component="span"
                      variant="subtitle1"
                      color="inherit"
                      sx={text}
                      textTransform="capitalize"
                    >
                      {item.name}
                      <ImageMarked className="MuiImageMarked-root" />
                    </Typography>
                  </Image>
                </ImageButton>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Fade>
    </section>
  );
};

export default Collection;

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
  },
  "&:hover, &.Mui-focusVisible": {
    // zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
  ".MuiTypography-root": {
    fontSize: "1.2rem",
    fontWeight: "500",
    textShadow: "1px 1px 2px var(--text-color)",
  },
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.1,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));
