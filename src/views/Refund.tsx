import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { Box, Typography } from "@mui/material";
import TagHeader from "../components/TagHeader";

const Info = {
  title: "Chính sách đổi trả | Thơm Parfum",
  desc: "Thomparfum.vn cam kết tất cả sản phẩm Thomparfum.vn bán ra đảm bảo là hàng chính hãng 100%, chúng tôi không bán hàng giả, hàng nhái, hàng không đảm bảo chất lượng... Chúng tôi phục vụ nhu cầu mua hàng trên toàn quốc với chính sách cụ thể.",
  url: "https://thomparfum.vn/chinh-sach-doi-tra",
};

const About = () => {
  return (
    <div className="container">
      <TagHeader {...Info} />
      <Breadcrumb>
        <Typography color="text.primary">Chính sách đổi trả</Typography>
      </Breadcrumb>

      <div style={{ marginTop: "2rem" }}>
        <div className="title" style={{ marginBottom: "1rem" }}>
          Chính sách đổi trả
        </div>
        <p>
          – Hàng hóa Thơm Parfum bán ra đảm bảo là hàng chính hãng 100%, chúng
          tôi cam kết không bán hàng giả, hàng nhái, hàng không đảm bảo chất
          lượng.
          <br />
          <br />
          – Nếu còn seal và bill, trong vòng 24h khách hàng được phép đổi trả
          sang sáng tạo khác có giá trị tương đương hoặc cao hơn.
          <br />
          <br />
          – Sau khi mua hàng và khui seal (có video ghi lại quá trình mở hộp)
          trong vòng 48h, nếu sản phẩm bị méo mó, thay đổi hình dạng, hư hỏng bộ
          phận vòi xịt, ống xịt, bị nứt, vỡ,... Thơm Parfum sẽ hỗ trợ đổi trả
          cho quý khách.
          <br />
          <br />– Trong quá trình khách hàng sử dụng, lọ hương có vấn đề về vòi
          xịt, nắp, khách hàng có thể đem đến cửa hàng, nhân viên tại cửa hàng
          sẽ sửa chữa. Về việc khách hàng muốn chiết ra lọ nhỏ, khách hàng vui
          lòng tự trang bị lọ chiết, nhân viên sẽ hỗ trợ chiết cho khách hàng.
          <br />
          <br />– Chúng tôi không chấp nhận đổi trả lại những sản phẩm đã sử
          dụng, bị thay đổi kết cấu, rơi vỡ, hư hỏng do các yếu tố từ phía người
          sử dụng.
        </p>
      </div>
    </div>
  );
};

export default About;
