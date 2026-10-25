import React from "react";
import { Modal, Box, Fade, Button, IconButton } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CardGiftcardRoundedIcon from "@mui/icons-material/CardGiftcardRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { FANPAGE } from "../Helper/Helper";

const TEXT = "#1f2a24";

const GIFTS = [
  <>Chai chiết <strong>10ml</strong> tuỳ chọn mùi</>,
  <>Voucher ưu đãi <strong>250.000đ</strong></>,
];

const card = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "calc(100% - 32px)", sm: 500 },
  maxWidth: 500,
  bgcolor: "#fffdf8",
  borderRadius: "20px",
  boxShadow: "0 24px 60px rgba(30, 50, 40, 0.18), 0 2px 8px rgba(30, 50, 40, 0.06)",
  border: "1px solid rgba(62, 101, 83, 0.10)",
  px: { xs: 3, sm: 5 },
  pt: { xs: 4.5, sm: 5 },
  pb: { xs: 3, sm: 3.5 },
  textAlign: "center" as const,
  outline: "none",
  color: TEXT,
  fontFamily: "var(--body-font)",
  "& .MuiButton-root": { fontFamily: "var(--body-font)" },
};

const Notification = () => {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      aria-labelledby="gift-title"
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "rgba(20, 32, 26, 0.35)",
            backdropFilter: "blur(3px)",
          },
        },
      }}
    >
      <Fade in={open} timeout={350}>
        <Box sx={card}>
          <IconButton
            aria-label="Đóng"
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              color: TEXT,
              "&:hover": { backgroundColor: "var(--primary-color-light)" },
            }}
          >
            <CloseRoundedIcon />
          </IconButton>

          <Box
            sx={{
              width: 64,
              height: 64,
              mx: "auto",
              mb: 2,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "var(--primary-color-light)",
              color: "var(--primary-color)",
            }}
          >
            <CardGiftcardRoundedIcon sx={{ fontSize: 32 }} />
          </Box>

          <Box
            component="h2"
            id="gift-title"
            sx={{
              m: 0,
              fontFamily: "var(--title-font)",
              fontSize: { xs: 26, sm: 30 },
              lineHeight: 1.3,
              fontWeight: 700,
              color: "var(--primary-color)",
            }}
          >
            Quà tặng khi đặt hàng
            <br />
            qua Fanpage
          </Box>
          <Box
            component="p"
            sx={{
              mt: 1.5,
              mb: 0,
              fontSize: { xs: 17, sm: 18 },
              lineHeight: 1.5,
              fontWeight: 400,
              color: TEXT,
            }}
          >
            Nhắn tin để được tư vấn và nhận quà:
          </Box>

          <Box
            sx={{
              mt: 3,
              display: "flex",
              flexDirection: "column",
              gap: 1.25,
              textAlign: "left",
            }}
          >
            {GIFTS.map((g, i) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  px: 2.5,
                  py: 1.75,
                  borderRadius: "14px",
                  backgroundColor: "#f1f6f3",
                  border: "1px solid rgba(62, 101, 83, 0.12)",
                  color: TEXT,
                  fontSize: { xs: 17, sm: 18 },
                  fontWeight: 400,
                  "& strong": { color: "var(--price-color)", fontWeight: 700 },
                }}
              >
                <CheckRoundedIcon
                  sx={{ fontSize: 24, color: "var(--primary-color)", flexShrink: 0 }}
                />
                <span>{g}</span>
              </Box>
            ))}
          </Box>

          <Button
            fullWidth
            disableElevation
            variant="contained"
            href={FANPAGE}
            target="_blank"
            rel="noreferrer"
            onClick={handleClose}
            sx={{
              mt: 3.5,
              py: 1.6,
              borderRadius: "999px",
              textTransform: "none",
              fontSize: { xs: 17, sm: 18 },
              fontWeight: 700,
              backgroundColor: "var(--primary-color)",
              "&:hover": { backgroundColor: "#335646" },
            }}
          >
            Nhắn tin Fanpage nhận quà
          </Button>
          <Button
            fullWidth
            onClick={handleClose}
            sx={{
              mt: 1,
              py: 1.2,
              borderRadius: "999px",
              textTransform: "none",
              fontSize: 17,
              fontWeight: 500,
              color: "var(--primary-color)",
              "&:hover": { backgroundColor: "var(--primary-color-light)" },
            }}
          >
            Tôi đặt hàng trên web
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
};

export default Notification;
