import React from "react";
import CountdownTimer from "./countdown/CountdownTimer";
import Link from "./Link";

const FlashSale = () => {
  const today = new Date(+new Date().setHours(0, 0, 0, 0) + 86400000 * 2);
  // today change to 2
  // const today = new Date();
  const dateTime = today.getTime();

  return (
    <section className="sale">
      <div className="sale__container">
        <div className="sale__title container">
          <div className="sale__title-left">
            <img src="/assets/fsale_countdown_label.webp" />

            <div>Tuần Lễ Vàng</div>
          </div>
          <div className="sale__title-right">
            {/* <Link href="/category/chuong-trinh-uu-dai" underline="hover">
              Xem thêm
            </Link> */}
            <p>Kết thúc sau</p>
            <CountdownTimer targetDate={dateTime} />
          </div>
        </div>
        <center className="container">
          <Link href="/category/chuong-trinh-uu-dai">
            <img className="sale__img" src="/assets/img/events/birthday.jpg" />
          </Link>
        </center>
      </div>
    </section>
  );
};

export default FlashSale;
