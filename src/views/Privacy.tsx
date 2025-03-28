import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { Box, Typography } from "@mui/material";
import TagHeader from "../components/TagHeader";

const Info = {
  title: "Chính sách bảo mật | Thơm Parfum",
  desc: "Cảm ơn bạn đã truy cập vào trang Website được vận hành bởi Thơm Parfum. Chúng tôi tôn trọng và cam kết sẽ bảo mật những thông tin mang tính riêng tư của bạn. Xin vui lòng đọc bản Chính sách bảo vệ thông tin cá nhân của người tiêu dùng dưới đây để hiểu hơn những cam kết mà chúng tôi thực hiện nhằm tôn trọng và bảo vệ quyền lợi của người truy cập. Bảo vệ thông tin cá nhân của người tiêu dùng và gây dựng được niềm tin cho bạn là vấn đề rất quan trọng với chúng tôi.",
  url: "https://thomparfum.vn/chinh-sach-bao-mat",
};

const Privacy = () => {
  return (
    <div className="container">
      <TagHeader {...Info} />
      <Breadcrumb>
        <Typography color="text.primary">Chính sách bảo mật</Typography>
      </Breadcrumb>
      <Box
        sx={{
          "*": {
            lineHeight: "25px",
          },
          h3: {
            margin: "10px 0 5px 0",
          },
          mt: 4,
        }}
      >
        <p>
          Cảm ơn bạn đã truy cập vào trang Website được vận hành bởi Thơm
          Parfum. Chúng tôi tôn trọng và cam kết sẽ bảo mật những thông tin mang
          tính riêng tư của bạn. Xin vui lòng đọc bản Chính sách bảo vệ thông
          tin cá nhân của người tiêu dùng dưới đây để hiểu hơn những cam kết mà
          chúng tôi thực hiện nhằm tôn trọng và bảo vệ quyền lợi của người truy
          cập. Bảo vệ thông tin cá nhân của người tiêu dùng và gây dựng được
          niềm tin cho bạn là vấn đề rất quan trọng với chúng tôi. Vì vậy, chúng
          tôi sẽ dùng tên và các thông tin khác liên quan đến bạn tuân thủ theo
          nội dung của chính sách này. Chúng tôi chỉ thu thập những thông tin
          cần thiết liên quan đến giao dịch mua bán.
        </p>
        <h1 style={{ margin: "10px 0 5px 0" }}>
          CHÍNH SÁCH BẢO VỆ THÔNG TIN CÁ NHÂN CỦA NGƯỜI TIÊU DÙNG
        </h1>
        <p>
          Người Tiêu Dùng hoặc Khách Hàng sẽ được yêu cầu điền đầy đủ các thông
          tin theo các trường thông tin theo mẫu có sẵn trên Website
          thomparfum.vn như: Họ và Tên, Địa Chỉ (nhà riêng hoặc văn phòng), Số
          Điện Thoại (di động, nhà riêng hoặc văn phòng),… Thông tin này được
          yêu cầu để đặt và hoàn tất việc đặt hàng online của Khách hàng..
        </p>
        <p>
          • Về Cookie: Cookie là những thư mục dữ liệu được lưu trữ tạm thời
          hoặc lâu dài trong ổ cứng máy tính của Khách Hàng. Các Cookie được sử
          dụng để xác minh và duy trì thông tin cụ thể về việc sử dụng và người
          sử dụng Website: thomparfum.vn, như các tuỳ chọn cho trang web hoặc
          thông tin về giỏ hàng điện tử của họ. Nếu không đồng ý, Khách Hàng có
          thể xoá tất cả các cookie đã nằm trong ổ cứng máy tính của mình bằng
          cách tìm kiếm các thư mục với “Cookie” trong tên của nó và xoá đi.
          Trong tương lai, Khách Hàng có thể chỉnh sửa các lựa chọn trong trình
          duyệt của mình để các Cookie (tương lai) bị chặn; Xin được lưu ý rằng:
          Nếu làm vậy, Khách Hàng có thể không sử dụng được đầy đủ các tính năng
          của Website : thomparfum.vn.
        </p>
        <h3>1. MỤC ĐÍCH THU THẬP THÔNG TIN CÁ NHÂN CỦA NGƯỜI TIÊU DÙNG</h3>
        <p>
          Cung cấp dịch vụ cho Khách Hàng và quản lý, sử dụng thông tin cá nhân
          của Người Tiêu Dùng nhằm mục đích quản lý cơ sở dữ liệu về Người Tiêu
          Dùng và kịp thời xử lý các tình huống phát sinh (nếu có).
        </p>
        <h3>2. PHẠM VI SỬ DỤNG THÔNG TIN CÁ NHÂN</h3>
        <p>
          Website thomparfum.vn sử dụng thông tin của Người Tiêu Dùng cung cấp
          để:
        </p>
        <p>
          • Cung cấp các dịch vụ đến Người Tiêu Dùng;
          <br />
          • Gửi các thông báo về các hoạt động trao đổi thông tin giữa Người
          Tiêu Dùng và Thơm Parfum;
          <br />
          • Ngăn ngừa các hoạt động phá hủy, chiếm đoạt tài khoản người dùng của
          Người Tiêu Dùng hoặc các hoạt động giả mạo Người Tiêu Dùng;
          <br />
          • Liên lạc và giải quyết khiếu nại với Người Tiêu Dùng;
          <br />• Xác nhận và trao đổi thông tin về giao dịch của Người Tiêu
          Dùng tại Thơm Parfum;
        </p>
        <h3>3. THỜI GIAN LƯU TRỮ THÔNG TIN CÁ NHÂN</h3>
        <p>
          Không có thời hạn ngoại trừ trường hợp Người Tiêu Dùng gửi có yêu cầu
          hủy bỏ tới cho Ban quản trị hoặc Công ty giải thể hoặc bị phá sản.
        </p>
        <h3>
          4. NHỮNG NGƯỜI HOẶC TỔ CHỨC CÓ THỂ ĐƯỢC TIẾP CẬN VỚI THÔNG TIN CÁ NHÂN
          CỦA NGƯỜI TIÊU DÙNG
        </h3>
        <p>
          Người Tiêu Dùng đồng ý rằng, trong trường hợp cần thiết, các cơ
          quan/tổ chức/cá nhân sau có quyền được tiếp cận và thu thập các thông
          tin cá nhân của mình, bao gồm:
        </p>
        <p>
          • Ban quản trị.
          <br />
          • Bên thứ ba có dịch vụ tích hợp với Website: thomparfum.vn
          <br />
          • Cơ quan nhà nước có thẩm quyền trong trường hợp có yêu cầu theo quy
          định tại quy chế hoạt động
          <br />
          • Cố vấn tài chính, pháp lý và Công ty kiểm toán
          <br />
          • Bên khiếu nại chứng minh được hành vi vi phạm của Người Tiêu Dùng
          <br />• Theo yêu cầu của cơ quan nhà nước có thẩm quyền
        </p>
        <h3>5. ĐỊA CHỈ CỦA ĐƠN VỊ THU THẬP VÀ QUẢN LÝ THÔNG TIN</h3>
        <p>
          • Địa chỉ: 65 Lê Lợi, Bến Thành, Quận 1, Thành Phố Hồ Chí Minh, Việt
          Nam.
          <br />
          • Điện thoại: 0588 2222 00
          <br />• Email: Cskh@Thomparfum.vn
        </p>
        <h3>6. CAM KẾT BẢO MẬT THÔNG TIN CÁ NHÂN CỦA NGƯỜI TIÊU DÙNG</h3>
        <p>
          Thông tin cá nhân của Người Tiêu Dùng trên Website thomparfum.vn được
          Ban quản trị cam kết bảo mật tuyệt đối theo chính sách bảo mật thông
          tin cá nhân được đăng tải trên Website: thomparfum.vn. Việc thu thập
          và sử dụng thông tin của mỗi Người Tiêu Dùng chỉ được thực hiện khi có
          sự đồng ý của Người Tiêu Dùng trừ những trường hợp pháp luật có quy
          định khác và quy định này.
        </p>
        <p>
          Không sử dụng, không chuyển giao, cung cấp hoặc tiết lộ cho bên thứ 3
          về thông tin cá nhân của Người Tiêu Dùng khi không có sự đồng ý của
          Người Tiêu Dùng ngoại trừ các trường hợp được quy định tại quy định
          này hoặc quy định của pháp luật.
        </p>
        <p>
          Trong trường hợp máy chủ lưu trữ thông tin bị hacker tấn công dẫn đến
          mất mát dữ liệu cá nhân của Người Tiêu Dùng, Ban quản trị có trách
          nhiệm thông báo và làm việc với cơ quan chức năng điều tra và xử lý
          kịp thời, đồng thời thông báo cho Người Tiêu Dùng được biết về vụ
          việc.
        </p>
        <p>
          Bảo mật tuyệt đối mọi thông tin giao dịch trực tuyến của Người Tiêu
          Dùng bao gồm thông tin hóa đơn.
        </p>
        <h3>
          7. CƠ CHẾ TIẾP NHẬN VÀ GIẢI QUYẾT KHIẾU NẠI LIÊN QUAN ĐẾN VIỆC THÔNG
          TIN CỦA NGƯỜI TIÊU DÙNG
        </h3>
        <p>
          Khi phát hiện thông tin cá nhân của mình bị sử dụng sai mục đích hoặc
          phạm vi, Người Tiêu Dùng gửi email khiếu nại đến Email:
          Cskh@thomparfum.vn hoặc gọi điện thoại tới số 0588 2222 00 để khiếu
          nại và cung cấp chứng cứ liên quan tới vụ việc cho Ban quản trị. Ban
          quản trị cam kết sẽ phản hồi ngay lập tức hoặc muộn nhất là trong vòng
          24 giờ làm việc kể từ thời điểm nhận được khiếu nại.
        </p>
      </Box>
    </div>
  );
};

export default Privacy;
