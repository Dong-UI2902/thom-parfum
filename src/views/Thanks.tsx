import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Notification from "../components/Notification";

const Thanks = () => {
  return (
    <div>
      <div className="product container">
        <div className="thanks">
          <div className="thanks__container">
            <div className="success-icon">
              <div className="success-icon__tip"></div>
              <div className="success-icon__long"></div>
            </div>
            <Notification />
            <div className="thanks__title">Đặt Hàng Thành Công</div>
            <div className="thanks__message">
              Cảm ơn bạn đã đặt hàng tại Thơm Parfum
              <br />
              Đơn hàng sẽ được giao đến quý khách từ 2-4 ngày! Chúc quý khách
              một ngày tốt lành ❤
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
