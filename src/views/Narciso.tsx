import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { Grid, Typography } from "@mui/material";
import "../styles/Event.scss";
import TagHeader from "../components/TagHeader";

const Info = {
  title:
    "Bộ sưu tập nước hoa Narciso Rodriguez mà bạn không thể bỏ qua | Thơm Parfum",
  desc: "Thomparfum.com - Cửa hàng nước hoa chính hãng, uy tín tại TPHCM, chuyên cung cấp các sản phẩm nước hoa chính hãng với giá phù hợp.",
  url: "https://thomparfum.com/narciso",
};

const Narciso = () => {
  return (
    <div className="container event">
      <TagHeader {...Info} />
      <div className="event__container">
        <Breadcrumb>
          <Typography color="text.primary">
            Bộ sưu tập Narciso Rodriguez
          </Typography>
        </Breadcrumb>
        <div className="event__section">
          <div>
            <center>
              <div className="title">
                Bộ sưu tập nước hoa Narciso Rodriguez mà bạn không thể bỏ qua
              </div>
              <img className="event__img" src="/assets/narciso.jpg" />
            </center>
            <p className="event__desc">
              Nước hoa là một trong những phụ kiện không thể thiếu trong bộ sưu
              tập làm đẹp của phụ nữ hiện đại. Và giữa vô vàn các thương hiệu
              nước hoa nổi tiếng trên thị trường, nước hoa Narciso đã chinh phục
              trái tim của không ít người yêu thích hương thơm độc đáo và phá
              cách.
              <br />
              Cho đến nay, thương hiệu này có hơn 27 loại nước hoa với những tên
              gọi và mùi hương khác nhau. Không chỉ nổi bật với bề ngoài đẹp,
              hương thơm khi review nước hoa Narciso cũng sẽ khiến bạn phải ngất
              ngây.
            </p>
          </div>
          <div>
            <div className="event__box">
              <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                  <img
                    className="event__img"
                    src="/assets/img/events/rouge.jpg"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="event__title">
                    1. Narciso Rodriguez Narciso Rouge
                  </div>
                  <p>
                    Được tung ra thị trường vào năm 2018 với thần thái quyến rũ,
                    sang trọng, đầy gợi cảm của của người phụ nữ. Chính vì thế
                    mà đây như sự lựa chọn tuyệt vời với đầy đủ các yếu tố mang
                    đến vẻ đẹp của một loại nước hoa mà mọi phụ nữ đều cần đến.
                  </p>
                  <p className="muihuong">
                    <label>Hương đầu:</label> Hoa Diên Vỹ, Hồng Bulgari
                    <br />
                    <label>Hương giữa:</label> Xạ Hương, Hoa Huệ, Hoa Cam
                    <br />
                    <label>Hương cuối:</label> Đậu Tonka, Vanilla, Gỗ Tuyết
                    Tùng, Cỏ Hương Bài, Gỗ Đàn Hương
                  </p>
                  <div className="muihuong">
                    <p>
                      <label>Phong cách:</label> Gợi cảm, Sang trọng, Kiêu kỳ
                    </p>
                    <p>
                      <label>Lưu Hương:</label> 6-10 giờ
                    </p>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div className="event__box">
              <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                  <div className="event__title">
                    2. Narciso Eau de Parfum Ambrée
                  </div>
                  <p>
                    Ambrée là thành viên mới của hãng nước hoa Narciso
                    Rodriguez, đây là một hương thơm hoa phương Đông dành cho
                    phụ nữ vừa được ra mắt vào năm 2020. Người pha chế mùi hương
                    này là Aurelien Guichard. Hương chủ đạo là Hoa Sứ và Hoa
                    Hoàng Lan (Ngọc Lan Tây), Xạ Hương, Hổ Phách, Gỗ Tuyết Tùng,
                    Vani và Cashmeran.
                  </p>
                  <p className="muihuong">
                    <label>Hương đầu:</label> Hoa trắng, Hoa sứ, Hoa hoàng lan
                    <br />
                    <label>Hương giữa:</label> Xạ hương, Hổ phách
                    <br />
                    <label>Hương cuối:</label> Gỗ tuyết tùng, Vanilla, Cashmeran
                  </p>
                  <p className="muihuong">
                    <label>Phong cách:</label> Sang trọng, Quyến rũ, Thu hút
                  </p>
                  <p className="muihuong">
                    <label>Lưu Hương:</label> 6-10 giờ
                  </p>
                </Grid>
                <Grid item xs={12} md={6}>
                  <img src="/assets/img/events/ambree.jpg" />
                </Grid>
              </Grid>
            </div>
            <div className="event__box">
              <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                  <img src="/assets/img/events/cristal.jpg" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="event__title">
                    3. Narciso Eau de Parfum Cristal
                  </div>
                  <p>
                    Được ra mắt vào 2022 Narciso Cristal EDP được mệnh danh
                    “Nàng Thơ”. Mùi hương xao xuyến biết bao con tim thiếu nữ
                    bởi hương thơm nhẹ nhàng và gợi cảm. Bậc thầy điều chế
                    Natalie Gracia- Cetto là người sáng tạo ra hương thơm
                    này.Vẫn giữ nguyên bản thiết kế chai thủy tinh vuông vức
                    cùng màu hồng cánh sen dịu dàng,tạo ra ánh nhìn hớp hồn
                    người khác từ ánh nhìn đầu tiên.
                  </p>
                  <p className="muihuong">
                    <label>Hương đầu:</label> Hoa lan Nam Phi, Hoa cam, Cam
                    bergamot
                    <br />
                    <label>Hương giữa:</label> Xạ hương, Hoa trắng, Hoa hồng,
                    Hoa nhài
                    <br />
                    <label>Hương cuối:</label> Len cashmere, Gỗ tuyết tùng, Hổ
                    phách, Benzoin
                  </p>
                  <p className="muihuong">
                    <label>Phong cách:</label> Trẻ trung, Thanh tao, Quyến rũ
                  </p>
                  <p className="muihuong">
                    <label>Lưu Hương:</label> 6-10 giờ
                  </p>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Narciso;
