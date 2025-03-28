import { Box, Button, Link } from "@mui/material";
import React, { memo, useRef } from "react";
import { FANPAGE, INS, TIKTOK, isMobile } from "../../Helper/Helper";
import ReactHlsPlayer from "react-hls-player";
import Fade from "react-reveal/Fade";

const Header = () => {
  const videoNode = useRef();

  return (
    <section className="header">
      <div className="header__container">
        <Box data-vjs-player>
          <ReactHlsPlayer
            src={
              isMobile()
                ? "/assets/videos/video2/filename.m3u8"
                : "/assets/videos/video1/filename.m3u8"
            }
            autoPlay={true}
            width="100%"
            height="auto"
            controls={false}
            loop
            muted
            playsInline
            //@ts-ignore
            playerRef={videoNode}
          />
        </Box>
        <div className="header__content">
          <div className="header__content-data">
            <Fade bottom>
              <div className="header__content-title title">
                <p>Chào mừng đến với</p>
                Thơm Parfum
                <p className="header__content-desc">
                  Một tiệm nước hoa nho nhỏ lấy cảm hứng từ những con người có
                  cảm xúc đặc biệt biệt với hương thơm mê hoặc.
                </p>
              </div>
              <div>
                <Button
                  component={Link}
                  href="/category/chuong-trinh-uu-dai"
                  className="btn-primary"
                  variant="contained"
                  color="primary"
                  endIcon={<i className="ri-arrow-right-up-line"></i>}
                >
                  Mua ngay
                </Button>
              </div>
            </Fade>
          </div>
          <Fade top>
            <div className="home__social">
              <span className="home__social-follow">Follow Us</span>
              <div className="home__social-links">
                <a
                  href={FANPAGE}
                  target="_blank"
                  rel="noreferrer"
                  className="home__social-link"
                >
                  <i className="ri-facebook-fill"></i>
                </a>
                <a
                  href={INS}
                  target="_blank"
                  rel="noreferrer"
                  className="home__social-link"
                >
                  <i className="ri-instagram-line"></i>
                </a>
                <a
                  href={TIKTOK}
                  target="_blank"
                  rel="noreferrer"
                  className="home__social-link"
                >
                  <i className="ri-tiktok-fill"></i>
                </a>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default memo(Header);
