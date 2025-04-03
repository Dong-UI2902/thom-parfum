import { Divider, Typography } from "@mui/material";
import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import "../styles/About.scss";
import TagHeader from "../components/TagHeader";

const Info = {
  title: "Giới thiệu về Thơm Parfum",
  desc: "ThomParfum.com - Bạn đang tìm kiếm điều gì ở một cửa hàng nước hoa chính hãng? Những sản phẩm chính hãng? Một mùi hương khiến bạn hài lòng? Hơn cả thế, Thơm Parfum sẽ mang đến cho bạn những cảm xúc tuyệt vời khác cùng mùi hương.",
  url: "https://thomparfum.com/gioi-thieu",
};

const About = () => {
  return (
    <div id="about" className="container about">
      <TagHeader {...Info} />
      <Breadcrumb>
        <Typography color="text.primary">Giới thiệu về Thơm Parfum</Typography>
      </Breadcrumb>
      <div className="about__section">
        <div className="title">
          <div className="about__title">Thơm Parfum</div>
          <p>Trải nghiệm những cảm xúc mùi hương đầy thi vị</p>
        </div>
        <div className="about__desc">
          <div>
            <p>
              Bạn đang tìm kiếm sản phẩm chính hãng, một mùi hương khiến bạn hài
              lòng? Hơn cả thế, <strong>Thơm Parfum</strong> sẽ mang đến cho bạn
              những cảm xúc tuyệt vời khác cùng mùi hương.
            </p>
            <br />
            <ul>
              <li>
                Để một ngày vui, bạn vẫn tự tin bước ra ngoài với phong thái đầy
                tự tin.
              </li>
              <li>
                Để một ngày buồn, bạn thả nỗi buồn kia vào một khoảng lặng và
                bình yên trôi đi mất.
              </li>
              <li>
                Để một ngày yêu, bạn cuồng nhiệt và cháy hết mình cho những cảm
                xúc thăng hoa.
              </li>
              <li>
                Và một ngày bình thường, bạn vẫn là chính bạn, vẫn mang một màu
                sắc riêng của mình.
              </li>
            </ul>
          </div>
          <br />
          <div>
            <div className="title">
              Vì sao Thơm Parfum xứng đáng để bạn đồng hành?
            </div>
            <div>
              <strong>Thơm Parfum</strong> – Nơi trưng bày và kinh doanh tất cả
              các thương hiệu nước hoa trên toàn thế giới. Tại{" "}
              <strong>Thơm Parfum</strong> chúng tôi luôn tin rằng: Mỗi mùi
              hương là một cuộc hành trình. Chúng lặn sâu vào quá khứ, dạo chơi
              trong kí ức. Chúng khám phá những chân trời đầy cảm hứng và chưa
              được biết tới. Những cảm xúc tuyệt vời của tuổi thanh xuân.
            </div>
            <br />
            <ul>
              <li>
                Luôn tìm kiếm những nguồn cung cấp nước hoa chất lượng và đảm
                bảo là nước hoa chính hãng đến cho khách hàng với chi phí tối ưu
                nhất.
              </li>
              <li>Nói KHÔNG với hàng giả, hàng nhái</li>
              <li>
                Có chính sách bảo hành, đổi trả đầy đủ được quy định cụ thể trên
                website Thomparfum.com
              </li>
              <li>
                <strong>Thơm Parfum</strong> trân trọng mọi trải nghiệm của
                khách hàng như của chính mình!
              </li>
            </ul>
          </div>
          <div>
            <center>
              <Divider
                sx={{
                  width: "180px",
                  color: "var(--text-color)",
                  marginTop: "4rem",
                }}
              >
                THƠM PARFUM
              </Divider>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
