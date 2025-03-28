import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { Typography } from "@mui/material";
import TagHeader from "../components/TagHeader";

const Info = {
  title: "Bộ Sưu Tập Nước Hoa Nam Mùa Thu Đông | Thơm Parfum",
  desc: "Với phái mạnh, nước hoa chính là “mảnh ghép” vô cùng quan trọng để hoàn thiện bản thân họ. Cùng Coolmate đi “giải mã” top 12 hương nước hoa Thu-Đông nam được yêu thích nhất 2023 nhé.",
  url: "https://thomparfum.vn/wintercollection",
};

const WinterCollection = () => {
  return (
    <div className="container event">
      <TagHeader {...Info} />
      <div className="event__container winter">
        <Breadcrumb>
          <Typography color="text.primary">
            Bộ Sưu Tập Nước Hoa Nam Mùa Thu Đông
          </Typography>
        </Breadcrumb>
        <div className="section ">
          <div>
            <center>
              <div className="title">
                Bộ sưu tập nước hoa nam mùa thu đông được yêu thích nhất
              </div>
              <img className="event__img" src="/assets/narciso1.webp" />
            </center>
            <p className="event__desc">
              Với phái mạnh, nước hoa chính là “mảnh ghép” vô cùng quan trọng để
              hoàn thiện bản thân họ. Cùng Coolmate đi “giải mã” top 12 hương
              nước hoa Thu-Đông nam được yêu thích nhất 2023 nhé.
            </p>
          </div>
          <div>
            <div className="event__title">1. Dior Sauvage EDP</div>
            <p>
              Hương nước hoa Thu-Đông nam mà bạn không thể bỏ qua đó là Dior
              Sauvage EDP. Sở hữu hương thơm khiến nhiều người mê mẩn, Sauvage
              đã trở thành “kinh điển” trong thế giới nước hoa.
            </p>
            <img src="/assets/img/events/dior.webp" />
            <p>
              Giống như bản “giao hưởng” hiện đại với cảm xúc nồng nàn, nốt
              hương đầu mang tới sự tươi mát của cam begarmot, một chút hương vị
              của tiêu. Từ từ hương đầu bay đi, chúng ta cảm nhận được nét quyến
              rũ, gợi cảm của hoa oải hương, phong lữ, cỏ Vetiver, … Chính tầng
              hương này tô điểm cho sự nam tính đặc biệt cho phái mạnh. Khép lại
              là nốt hương mạnh mẽ của Hổ phách, nhựa Ambroxan và nhựa Labdanum.
            </p>
            <img src="/assets/img/events/dior2.jpg" />
            <p>
              Độ lưu hương của Dior Sauvage khá tốt, rơi vào khoảng 8-12 tiếng
              trên da. Đồng thời độ tỏa hương rất xa trong phạm vi 2m, vậy nên,
              rất thích hợp với không gian ngoài trời phóng khoáng.
            </p>
          </div>
          <div>
            <div className="event__title">2. Bleu de Chanel Parfum</div>
            <p>
              Thương hiệu chanel đã cho ra mắt sản phẩm Bleu de Chanel Parfum ẩn
              chứa sâu bên trong hương bị biển mang đậm phong cách thể thao cá
              tính. Không chỉ nổi tiếng với những dòng nước hoa chất lượng bậc
              nhất thế giới, dòng nước hoa nữ quyến rũ mà Chanel còn khẳng định
              đẳng cấp riêng của chính mình trong quá trình làm đẹp cho cánh mày
              râu.
            </p>
            <img src="/assets/img/events/bleu.jpg" />
            <p>
              Được ra mắt vào năm 2018, nước hoa Bleu de Chanel Parfum được sáng
              tạo bởi Olivier Polge với sự mệnh hoàn thiện bộ ba hoàn hảo của
              dòng Bleu de Chanel của Nhà mốt Chanel. Bleu de Chanel Parfum đại
              diện cho màu sắc của sự tự do, thể hiện sự mạnh mẽ và tinh tế, với
              kỳ vọng có thể làm hài lòng những tín đồ nước hoa khó tính của
              hãng Chanel. Hương gỗ đàn hương và sự tươi mát của vỏ chanh vàng
              sẽ là mùi hương gây ấn tượng tới khướu giác của bạn khi lần đầu
              mặc Bleu de Chanel Parfum lên người. Một sự phá cách, mang hướng
              hiện đại nhưng vẫn giữ lại được những nét cổ điển trong dòng Bleu
              de Chanel của thương hiệu Chanel.
            </p>
          </div>
          <div>
            <div className="event__title">3. Tom Ford Ombré Leather</div>
            <p>
              Nước hoa Ombre Leather kết hợp da thuộc và gia vị hoa, gợi lên
              không khí tĩnh lặng, không gian rộng mở và cảnh quan nhiều lớp của
              miền tây nam nước Mỹ
            </p>
            <img src="/assets/img/events/tomford.jpg" />
            <p>
              Bụi trên gió, da trên da, hương thơm da thuộc ombre gợi lên trái
              tim sa mạc của miền tây. Sự gợi cảm của da đen đậm được kết cấu
              bằng hoắc hương và cỏ vetiver, trong khi tông màu hoa của hoa nhài
              sambac gợi lên vẻ đẹp sa mạc hoang dã - và các lớp hổ phách và rêu
              bắt chước sức nóng của đá và cát.
            </p>
            <p>
              Tom Ford Ombre Leather mang một mùi hương đầy hấp dẫn, cám dỗ và
              được đánh giá cao cả về sự kết hợp giữa các nốt hương và độ lưu
              hương, Tom Ford Ombre Leather thật sự đã trở thành lựa chọn không
              thể bỏ qua dành cho các quý ông và cả những quý cô đang tìm kiếm
              nét quyến rũ mới lạ.
            </p>
          </div>
          <div className="event__title">4. Le Labo Santal 33</div>
          <p>
            Một dòng nước hoa nam mùa đông chắc chắn bạn không thể bỏ lỡ đó
            chính là Le Labo Santal 33. Đây là sản phẩm được ra mắt bởi thương
            hiệu nổi tiếng Le Lano vào năm 2011.
          </p>
          <img src="/assets/img/events/santal33.jpg" />
          <p>
            Cái không khí ấy là sự tổng hòa của rất nhiều các nốt hương được
            hoàn quyện hài hòa dưới bàn tay của nghệ sỹ điều hương Frank Voelkl,
            từ chủ điểm Gỗ đàn hương, thêm chút Lá cói để tạo ra hiệu ứng gỗ
            tươi, cùng Da thuộc để làm đanh cái không khí lại cho giống với một
            xưởng gỗ và những bụi gỗ được tạo ra từ cảm giác phấn bụi của Diên
            vĩ và Violet. Mọi thứ được sắp xếp một cách ngăn nắp và ẩn chứa rõ ý
            đồ trong Santal 33, tạo thành nét ấn tượng đem tới thành công cho
            mùi hương của Le Labo.
          </p>
        </div>
        <div className="event__title">Lời kết</div>
        <p>
          Trên đây là 4 hương nước hoa Thu-Đông nam mà chúng mình muốn giới
          thiệu cho bạn. Mỗi dòng nước hoa đều có phong cách và cá tính khác
          nhau, nên bạn có thể xem và tham khảo đâu là style mà mình yêu thích
          hay theo đuổi.
        </p>
      </div>
    </div>
  );
};

export default WinterCollection;
