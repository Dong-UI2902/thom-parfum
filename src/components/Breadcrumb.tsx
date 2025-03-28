import { Stack, Breadcrumbs, Typography } from "@mui/material";
import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Link from "./Link";

const Breadcrumb: React.FC<{ children: any }> = ({ children }) => {
  return (
    <div style={{ paddingTop: "5.5rem" }}>
      <Stack spacing={2}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          sx={{ textTransform: "capitalize" }}
        >
          <Link underline="hover" color="inherit" href="/">
            Trang Chủ
          </Link>
          {children}
        </Breadcrumbs>
      </Stack>
    </div>
  );
};

export default Breadcrumb;
