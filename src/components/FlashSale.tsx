import React from "react";
import CountdownTimer from "./countdown/CountdownTimer";
import Link from "./Link";
import { isMobile } from "../Helper/Helper";

const FlashSale = () => {
  const today = new Date(+new Date().setHours(0, 0, 0, 0) + 86400000 * 2);
  // today change to 2
  // const today = new Date();
  const dateTime = today.getTime();

  return (
    <section className="sale">
      <div className="sale__container">
        <div className="sale__title container">
          <div className="sale__title-left" style={{paddingLeft:"20px"}}>
            <img src="/assets/fsale_countdown_label.webp" style={{width:"180px",height:"39px",objectFit:"contain"}} />

            <div style={{color:"#ff3c00"}}>
  <div style={{fontSize:"18px",fontWeight:"700"}}>TUẦN LỄ VÀNG</div>
</div>
          </div>
          <div className="sale__title-right">
            {/* <Link href="/category/chuong-trinh-uu-dai" underline="hover">
              Xem thêm
            </Link> */}
            <p style={{fontSize:"16px",fontWeight:"700",color:"#ff3c00"}}>
  Kết thúc sau
</p>
            <CountdownTimer targetDate={dateTime} />
          </div>
        </div>
        <center className="container">
          <Link href="/category/chuong-trinh-uu-dai">
            {/* LINK BANNER 1 */}
            <img className="sale__img" src="/assets/img/events/Event-daypc.jpg"
            />
            {/* <img className="sale__img" src={`/assets/img/events/${
                isMobile() ? "birthday_mobile.png" : "birthday.jpg"
              }`}
            /> */}
          </Link>
        </center>
      </div>
    </section>
  );
};

export default FlashSale;
