import React from "react";

const DateTimeDisplay: React.FC<{ value: any; type: any; isDanger: any }> = ({
  value,
  type,
  isDanger,
}) => {
  return (
    <div className={isDanger ? "countdown danger" : "countdown"}>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
