import React from "react";
import { Modal, Box, Fade, Button, IconButton } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CardGiftcardRoundedIcon from "@mui/icons-material/CardGiftcardRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { FANPAGE } from "../Helper/Helper";

const GIFTS = [
  <>Một chai chiết <strong>10ml</strong> tuỳ chọn</>,
  <>Một voucher trị giá <strong>250.000đ</strong></>,
];

const card = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "calc(100% - 32px)", sm: 520 },
  maxWidth: 520,
  bgcolor: "#fffdf8",
  borderRadius: "20px",
  boxShadow: "0 24px 60px rgba(30, 50, 40, 0.18), 0 2px 8px rgba(30, 50, 40, 0.06)",
  border: "1px solid rgba(62, 101, 83, 0.10)",
  px: { xs: 3, sm: 4.5 },
  pt: { xs: 4, sm: 4.5 },
  pb: { xs: 3, sm: 3.5 },
  textAlign: "center" as const,
  outline: "none",
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
            size="small"
            sx={{
              position: "absolute",
              top: 12,
              right: 12,
              color: "var(--text-body-color)",
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
              fontSize: { xs: 24, sm: 28 },
              lineHeight: 1.35,
              fontWeight: 500,
              color: "var(--text-color)",
            }}
          >
            Đặt hàng qua Fanpage
            <br />
            để nhận quà tặng kèm
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
                  borderRadius: "12px",
                  backgroundColor: "#f4f7f5",
                  color: "var(--text-body-color)",
                  fontSize: { xs: 17, sm: 18 },
                  "& strong": { color: "var(--text-color)", fontWeight: 700 },
                }}
              >
                <CheckRoundedIcon
                  sx={{ fontSize: 22, color: "var(--primary-color)", flexShrink: 0 }}
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
              mt: 3,
              py: 1.6,
              borderRadius: "999px",
              textTransform: "none",
              fontSize: { xs: 17, sm: 18 },
              fontWeight: 500,
              backgroundColor: "var(--primary-color)",
              "&:hover": { backgroundColor: "#335646" },
            }}
          >
            Nhắn Fanpage nhận quà
          </Button>
          <Button
            fullWidth
            onClick={handleClose}
            sx={{
              mt: 1,
              py: 1.2,
              borderRadius: "999px",
              textTransform: "none",
              fontSize: 16,
              color: "var(--text-body-color)",
              "&:hover": { backgroundColor: "var(--primary-color-light)" },
            }}
          >
            Để sau, tiếp tục đặt trên web
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
};

export default Notification;
