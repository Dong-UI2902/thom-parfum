import React, { ChangeEvent, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Container } from "@mui/material";
import { useLocation } from "react-router-dom";
import MenuHeader from "./MenuHeader";
import Link from "../Link";
import { useStore } from "../../context";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = React.useState<string>("");
  const [isScrollDown, setIsScrollDown] = React.useState(false);
  const { getCart } = useStore();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const { pathname } = useLocation();

  const scrollHeader = () => {
    const header = document.getElementById("header");
    if (window.pageYOffset >= 80 || pathname !== "/") {
      // @ts-ignore
      header.classList.add("scroll-header");
      setIsScrollDown(true);
    } else {
      // @ts-ignore
      header.classList.remove("scroll-header");
      setIsScrollDown(false);
    }
  };

  useEffect(() => {
    scrollHeader();
  }, [pathname]);

  const handleScrollUp = () => {
    const scrollUp = document.getElementById("scroll-up");
    if (window.scrollY >= 400) {
      // @ts-ignore
      scrollUp.classList.add("show-scroll");
    } else {
      // @ts-ignore
      scrollUp.classList.remove("show-scroll");
    }
  };

  window.addEventListener("scroll", scrollHeader);
  window.addEventListener("scroll", handleScrollUp);
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          color="transparent"
          sx={{ boxShadow: "none", transition: "all 0.3s" }}
          id="header"
        >
          <Container maxWidth="lg" sx={{ padding: "0!important" }}>
            <Toolbar className="toolbar">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                onClick={handleDrawerOpen}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component={Link}
                href="/"
                sx={{
                  display: {
                    sm: "block",
                  },
                  maxWidth: { xs: "87px", md: "100px" },
                }}
              >
                <img
                  width={"100%"}
                  src={
                    isScrollDown
                      ? "/assets/dark-logo.png"
                      : "/assets/light-logo.png"
                  }
                />
              </Typography>

              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  component="form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    window.location.href = `/category/tim-kiem-san-pham?search=${input}`;
                  }}
                >
                  <Search sx={{ width: "unset", marginLeft: "16px" }}>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Tìm kiếm…"
                      inputProps={{
                        "aria-label": "search",
                        value: input,
                        onChange: (e: ChangeEvent<HTMLInputElement>) =>
                          setInput(e.target.value),
                      }}
                    />
                  </Search>
                </Box>
                <IconButton
                  size="large"
                  aria-label="notifications"
                  color="inherit"
                  href="/gio-hang"
                >
                  <Badge badgeContent={getCart().length} color="error">
                    <i className="ri-shopping-bag-fill"></i>
                  </Badge>
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <MenuHeader open={open} setOpen={setOpen} />
      </Box>
    </div>
  );
}

export default Navbar;
