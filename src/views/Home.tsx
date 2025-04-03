import React from "react";
import Header from "../components/home/Header";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { Popular } from "../components/home/Popular";
import Fade from "react-reveal/Fade";
import NewProducts from "../components/home/NewProducts";
import Brand from "../components/home/Brand";
import TagHeader from "../components/TagHeader";
import Collection from "../components/home/Collection";
import Event from "../components/home/Event";
import FlashSale from "../components/FlashSale";

const Info = {
  title: "Cửa Hàng Nước Hoa Authentic - Thơm Parfum",
  desc: "Thomparfum.com - Cửa hàng nước hoa chính hãng, uy tín tại TPHCM, chuyên cung cấp các sản phẩm nước hoa chính hãng với giá phù hợp.",
  url: "https://thomparfum.com/",
};

function Home() {
  return (
    <div className="home" id="home">
      <TagHeader {...Info} />
      <Header />
      <section className="section about">
        <div className="container">
          <Grid container spacing={{ md: 10, xs: 4 }} alignItems="center">
            <Grid item md={6} xs={12} className="about__content">
              <Fade left>
                <div>
                  <p>Giới thiệu về</p>
                  <div className="title">Thơm Parfum</div>
                </div>
                <p>
                  Bạn đang tìm kiếm điều gì ở một cửa hàng nước hoa chính hãng?
                  Những sản phẩm chính hãng? Một mùi hương khiến bạn hài lòng?
                  Hơn cả thế, <strong>Thơm Parfum</strong> sẽ mang đến cho bạn
                  những cảm xúc tuyệt vời khác cùng mùi hương.
                </p>
                <div>
                  <Button
                    component={Link}
                    href="/gioi-thieu"
                    className="btn-primary"
                    variant="contained"
                    color="primary"
                    endIcon={<i className="ri-arrow-right-up-line"></i>}
                  >
                    Xem thêm
                  </Button>
                </div>
              </Fade>
            </Grid>
            <Grid item md={6} xs={12}>
              <div className="about__img">
                <Fade right>
                  <div className="about__img-overlay">
                    <img src="/assets/img/banner1.jpg" />
                  </div>
                  <div className="about__img-overlay">
                    <img src="/assets/img/banner2.jpg" />
                  </div>
                </Fade>
              </div>
            </Grid>
          </Grid>
        </div>
      </section>
      {/* <Event /> */}
      <div className="category section">
        <FlashSale />
        <center style={{ marginTop: 20, display: "block" }}>
          <Button
            component={Link}
            href="/category/chuong-trinh-uu-dai"
            className="btn-primary"
            variant="outlined"
            color="primary"
            endIcon={<i className="ri-arrow-right-up-line"></i>}
          >
            Xem thêm
          </Button>
        </center>
      </div>
      <Popular />
      <Collection />
      <section className="advise section">
        <div className="container">
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
              <Fade left>
                <h1>Bạn đang tìm kiếm mùi hương phù hợp với mình?</h1>
                <p>
                  Hãy liên hệ với chúng tôi để được tư vấn và dễ dàng tìm ra mùi
                  hương khiến bạn hài lòng nhất
                </p>
                <Button
                  target="_blank"
                  component={Link}
                  href="https://m.me/105374042191939"
                  variant="contained"
                  endIcon={<i className="ri-arrow-right-up-line"></i>}
                  color="primary"
                  className="btn-primary"
                >
                  Liên hệ ngay
                </Button>
              </Fade>
            </Grid>
            <Grid item xs={12} md={6}>
              <Fade right>
                <img src="/assets/banner2.jpg" />
              </Fade>
            </Grid>
          </Grid>
        </div>
      </section>
      <NewProducts />
      <section className="section commit">
        <div className="container">
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item md={6} xs={12}>
              <Fade left>
                <img className="commit__img" src="/assets/img/banner3.png" />
              </Fade>
            </Grid>
            <Grid item md={6} xs={12} className="commit__content">
              <Fade right>
                <div>
                  <p>Tại sao chọn</p>
                  <div className="title">Thơm Parfum</div>
                </div>
                <p>
                  <strong>Thơm Parfum</strong> – Nơi trưng bày và kinh doanh tất
                  cả các thương hiệu nước hoa trên toàn thế giới. Tại{" "}
                  <strong>Thơm Parfum</strong> chúng tôi luôn tin rằng: Mỗi mùi
                  hương là một cuộc hành trình. Chúng lặn sâu vào quá khứ, dạo
                  chơi trong kí ức. Chúng khám phá những chân trời đầy cảm hứng
                  và chưa được biết tới. Những cảm xúc tuyệt vời của tuổi thanh
                  xuân.
                </p>
                <div className="commit__details">
                  <p className="commit__details-description">
                    <i className="ri-checkbox-fill commit__details-icon"></i>
                    Cam kết chính hãng, đầy đủ thông tin sản phẩm
                  </p>
                  <p className="commit__details-description">
                    <i className="ri-checkbox-fill commit__details-icon"></i>
                    Gói quà miễn phí và tặng mẫu thử 5ml khi mua chai fullbox.
                  </p>
                  <p className="commit__details-description">
                    <i className="ri-checkbox-fill commit__details-icon"></i>
                    Tặng ngay voucher trị giá 300.000đ cho khách hàng mới
                  </p>
                  <p className="commit__details-description">
                    <i className="ri-checkbox-fill commit__details-icon"></i>
                    Miễn phí giao hàng toàn quốc.
                  </p>
                </div>
                <div>
                  <Button
                    component={Link}
                    href="/category/tat-ca-san-pham"
                    className="btn-primary"
                    variant="contained"
                    color="primary"
                    endIcon={<i className="ri-arrow-right-up-line"></i>}
                  >
                    Mua ngay
                  </Button>
                </div>
              </Fade>
            </Grid>
          </Grid>
        </div>
      </section>
      <Brand />
      <section className="section blog">
        <div className="container">
          <Grid container spacing={4} justifyItems="center">
            <Grid item md={6} xs={12}>
              <Card className="blog__card" sx={{ maxWidth: 500 }}>
                <img className="blog__card-img" src="/assets/narciso1.webp" />
                <CardContent className="blog__card-content">
                  <Typography gutterBottom variant="h6" component="div">
                    Bộ Sưu Tập Nước Hoa Nam Mùa Thu Đông
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Với phái mạnh, nước hoa chính là “mảnh ghép” vô cùng quan
                    trọng để hoàn thiện bản thân họ.
                  </Typography>
                  <Link href="/wintercollection" color="primary">
                    Khám phá
                  </Link>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={6} xs={12}>
              <Card className="blog__card" sx={{ maxWidth: 500 }}>
                <img className="blog__card-img" src="/assets/narciso.jpg" />
                <CardContent className="blog__card-content">
                  <Typography gutterBottom variant="h6" component="div">
                    Bộ Sưu Tập Narciso Rodriguez
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Thương hiệu nước hoa Narciso Rodriguez được biết đến như
                    biểu tượng mùi hương của những người phụ nữ hiện đại, tự tin
                    và là tâm điểm cuốn hút mọi ánh nhìn.
                  </Typography>
                  <Link href="/narciso" color="primary">
                    Khám phá
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </section>
    </div>
  );
}

export default Home;
