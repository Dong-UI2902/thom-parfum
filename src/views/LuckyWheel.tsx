import React, { useEffect } from "react";
import "../styles/Roulette.scss";
import Roulette from "../components/Wheel/Roulette";

const Info = {
  title: "Vòng quay may mắn",
  desc: "ThomParfum.com - Sự kiện vòng quay may mắn với vô vàng quà tặng hấp dẫn đang chờ đón.",
  url: "https://thomparfum.com/vong-quay-may-man",
};

const LuckyWheel = () => {
  useEffect(() => {
    const footer = document.getElementById("footer");
    // @ts-ignore: Object is possibly 'null'.
    footer.style.display = "none";
  }, []);

  return (
    <div className="wheel">
      <div style={{ backgroundImage: "url(./assets/img/lucky/br.jpg)" }}>
        <div className="wheel__container">
          <Roulette />
          <a
            className="wheel_btn animation"
            href="/category/chuong-trinh-uu-dai"
          >
            Săn ưu đãi 50%
          </a>
        </div>
      </div>
    </div>
  );
};

export default LuckyWheel;
