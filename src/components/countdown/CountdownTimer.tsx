import React from "react";
import { useCountdown } from "../../Helper/useCountdown";
import DateTimeDisplay from "./DateTimeDisplay";
import "../../styles/Countdown.scss";

const CountdownTimer: React.FC<{ targetDate: any }> = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter: React.FC<{
  days: any;
  hours: any;
  minutes: any;
  seconds: any;
}> = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <div className="countdown-box">
        <DateTimeDisplay value={days} type={"Ngày"} isDanger={days <= 3} />
        <p className="countdown-dot">:</p>
        <DateTimeDisplay value={hours} type={"Giờ"} isDanger={false} />
        <p className="countdown-dot">:</p>
        <DateTimeDisplay value={minutes} type={"Phút"} isDanger={false} />
        <p className="countdown-dot">:</p>
        <DateTimeDisplay value={seconds} type={"Giây"} isDanger={false} />
      </div>
    </div>
  );
};
