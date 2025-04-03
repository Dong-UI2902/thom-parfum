import { Box, Button, Grid, TextField, styled } from "@mui/material";
import React from "react";
import Link from "./Link";
import { FANPAGE, INS, PHONE_NUMBER, TIKTOK } from "../Helper/Helper";

const HeaderStyle = styled("div")(({ theme }) => ({
  fontWeight: "500",
  fontSize: "1.5rem",
  color: "var(--text-color)",
}));

const UlStyle = styled("ul")(({ theme }) => ({
  padding: 0,
  gridRowGap: "0.5rem",
  display: "grid",
  rowGap: " 0.5rem",
  listStyle: "none",
  marginTop: "15px",
  fontSize: "var(--small-font-size)",
  // [theme.breakpoints.only("xs")]: {
  //   gridTemplateColumns: "repeat(2,1fr)",
  //   gap: "0.5rem 1rem",
  // },
}));

const LinkStyle = styled(Link)(({ theme }) => ({
  transition: "all .3s",
  color: "inherit",
  "&:hover": {
    paddingLeft: "10px",
  },
  display: "flex",
  alignItems: "center",
  textTransform: "capitalize",
  fontSize: 16,
}));

const LiStyle = styled("li")(({ theme }) => ({
  "*": {
    fontSize: 20,
    marginRight: 5,
  },
  margin: "3px 0",
}));

const SocialStyle = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 20,
  cursor: "pointer",
  "*": {
    transition: ".3s",
    "&:hover": {
      transform: "translateY(-0.25rem)",
    },
  },
  marginTop: "10px",
  fontSize: "20px",
  a: {
    minWidth: "unset",
  },
  i: {
    fontSize: "20px",
  },
}));

const Footer = () => {
  const [input, setInput] = React.useState<string>("");

  return (
    <footer id="footer">
      <div className="section footer">
        <div className="container footer__register">
          <div className="title">
            Nhận thông tin mới nhất <br /> từ Thơm Parfum
          </div>
          <div className="footer__register-desc">
            Đăng ký nhận bản tin của chúng tôi để nhận tin tức độc quyền về các
            mặt hàng và chương trình khuyến mãi mới của chúng tôi!
          </div>
          <div className="footer__register-form">
            <TextField
              id="outlined-basic"
              label="Email (bắt buộc)"
              variant="outlined"
              fullWidth
              value={input}
              onChange={(e) => setInput(e.currentTarget.value)}
            />
            <Button
              variant="contained"
              fullWidth
              color="primary"
              onClick={() => setInput("")}
            >
              Đăng ký
            </Button>
          </div>
        </div>
        <div className="section footer__container">
          <div
            className="container"
            // style={{ backgroundImage: "url('/assets/img/footer.jpg')" }}
          >
            <Grid container spacing={6} rowGap={2}>
              <Grid item xs={12} md={3.3}>
                <img className="footer__logo" src="/assets/dark-logo.png" />
                <p>
                  Thơm Parfum - Nơi trưng bày và kinh doanh tất cả các thương
                  hiệu nước hoa trên toàn thế giới.
                </p>
              </Grid>
              <Grid item xs={12} md={2.7}>
                <HeaderStyle>Thông tin thêm</HeaderStyle>
                <UlStyle
                  sx={{
                    gridTemplateColumns: {
                      xs: "repeat(2,1fr)",
                      md: "repeat(1,1fr)",
                    },
                  }}
                >
                  <LinkStyle href="/gioi-thieu" underline="hover">
                    <LiStyle>
                      <i className="ri-information-line"></i>
                    </LiStyle>
                    giới thiệu
                  </LinkStyle>
                  <LinkStyle href="/chinh-sach-doi-tra" underline="hover">
                    <LiStyle>
                      <i className="ri-book-read-line"></i>
                    </LiStyle>
                    chính sách đổi trả
                  </LinkStyle>
                  <LinkStyle href="/chinh-sach-bao-mat" underline="hover">
                    <LiStyle>
                      <i className="ri-book-read-line"></i>
                    </LiStyle>
                    chính sách bảo mật
                  </LinkStyle>
                  <LinkStyle
                    href="/category/chuong-trinh-uu-dai"
                    underline="hover"
                  >
                    <LiStyle>
                      <i className="ri-gift-2-line"></i>
                    </LiStyle>
                    chương trình khuyến mãi
                  </LinkStyle>
                  {/* <LinkStyle href="/category/nuoc-hoa-nu" underline="hover">
                    <LiStyle>
                      <i className="ri-ink-bottle-line"></i>
                    </LiStyle>
                    nước hoa nữ
                  </LinkStyle>
                  <LinkStyle href="/category/nuoc-hoa-unisex" underline="hover">
                    <LiStyle>
                      <i className="ri-ink-bottle-line"></i>
                    </LiStyle>
                    nước hoa unisex
                  </LinkStyle> */}
                </UlStyle>
              </Grid>
              <Grid item xs={12} md={3.5}>
                <HeaderStyle>Cửa hàng</HeaderStyle>
                <UlStyle>
                  <LiStyle>
                    <i className="ri-store-3-line"></i>
                    <strong>Thơm Parfum Saigon Centre</strong>
                    <br />
                    65 Le Loi, Ben Nghe, Quan 1, Ho Chi Minh
                  </LiStyle>
                  <LiStyle>
                    <i className="ri-store-3-line"></i>
                    <strong>Thơm Parfum Khang Dien</strong>
                    <br />
                    Jamila Khang Dien, Song Hanh, Phu Huu, Tp Thu Duc, Ho Chi
                    Minh
                  </LiStyle>
                </UlStyle>
              </Grid>
              <Grid item xs={12} md={2.5}>
                <HeaderStyle>Liên hệ</HeaderStyle>
                <Box>
                  <UlStyle
                    sx={{
                      gridTemplateColumns: {
                        xs: "repeat(1,1fr)",
                      },
                    }}
                  >
                    <LinkStyle
                      href="mailto:cskh@thomparfum.com"
                      underline="hover"
                    >
                      <LiStyle sx={{ textTransform: "none" }}>
                        <i className="ri-mail-line"></i>cskh@thomparfum.com
                      </LiStyle>
                    </LinkStyle>
                    <LinkStyle href={`tel:${PHONE_NUMBER}`} underline="hover">
                      <LiStyle>
                        <i className="ri-phone-line"></i>
                        {PHONE_NUMBER}
                      </LiStyle>
                    </LinkStyle>
                    <li>
                      <SocialStyle>
                        <Link href={TIKTOK} target="_blank" rel="noreferrer">
                          <i className="ri-tiktok-fill"></i>
                        </Link>
                        <Link href={INS} target="_blank" rel="noreferrer">
                          <i className="ri-instagram-fill"></i>
                        </Link>
                        <Link href={FANPAGE} target="_blank" rel="noreferrer">
                          <i className="ri-facebook-fill"></i>
                        </Link>
                      </SocialStyle>
                    </li>
                  </UlStyle>
                </Box>
              </Grid>
            </Grid>
            <center
              style={{
                margin: "5rem 0 2rem",
                fontSize: "var(--small-font-size)",
              }}
            >
              <p>
                Copyright © {new Date().getFullYear()} Thơm Parfum. All Rights
                Reserved.
              </p>
            </center>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
