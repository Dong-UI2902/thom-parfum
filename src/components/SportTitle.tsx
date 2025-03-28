import { Divider } from "@mui/material";
import React from "react";

const SportTitle: React.FC<{ name: string; desc?: string }> = ({
  name,
  desc,
}) => {
  return (
    <div className="title title-center">
      <div className="sport-title">{name}</div>
      <p className="sport-desc">{desc}</p>
    </div>
  );
};

export default SportTitle;
