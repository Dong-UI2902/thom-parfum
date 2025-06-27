import { Button, Modal, Box, Typography, Link } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ClearIcon from "@mui/icons-material/Clear";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    md: 600,
    xs: "90%",
  },
  bgcolor: "background.paper",
  border: "none!important",
  boxShadow: 24,
  padding: 5,
};

const Notification = () => {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{ textAlign: "center" }}>
            <h2>
              Liên hệ về{" "}
              <span style={{ textDecoration: "underLine" }}>fanpage</span> để
              được gợi ý quà tặng:
            </h2>
          </div>
          <div style={{ width: "400px", margin: "1rem auto" }}>
            <p>
              - 1 chai chiết 10ml &quot;tuỳ chọn&quot; <br />- 1 voucher trị giá
              250.000đ
            </p>
          </div>
          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              justifyContent: "end",
              gap: "1rem",
            }}
          >
            <Button
              variant="outlined"
              color="error"
              endIcon={<ClearIcon />}
              onClick={handleClose}
            >
              Huỷ
            </Button>
            <Button
              component={Link}
              href="https://m.me/105374042191939"
              variant="contained"
              color="primary"
              target="_blank"
              endIcon={<ArrowForwardIcon />}
            >
              Đồng ý
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Notification;
