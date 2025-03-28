import {
  Drawer,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  styled,
  useTheme,
  Typography,
  ListItemIcon,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DiscountIcon from "@mui/icons-material/Discount";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InfoIcon from "@mui/icons-material/Info";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const drawerWidth = 350;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

const navItems1 = [
  {
    name: "Trang chủ",
    href: "/",
    icon: <HomeIcon />,
  },
  {
    name: "Giới thiệu",
    href: "/gioi-thieu",
    icon: <InfoIcon />,
  },
];

const navItems2 = [
  // {
  //   name: "Trang chủ",
  //   href: "/",
  //   icon: <HomeIcon />,
  // },
  // {
  //   name: "Giới thiệu",
  //   href: "/gioi-thieu",
  //   icon: <InfoIcon />,
  // },
  // {
  //   name: "Nước hoa nam",
  //   href: "/category/nuoc-hoa-nam",
  //   icon: <DashboardIcon />,
  // },
  // {
  //   name: "Nước hoa nữ",
  //   href: "/category/nuoc-hoa-nu",
  //   icon: <DashboardIcon />,
  // },
  // {
  //   name: "Nước hoa unisex",
  //   href: "/category/nuoc-hoa-unisex",
  //   icon: <DashboardIcon />,
  // },
  {
    name: "Chương trình ưu đãi",
    href: "/category/chuong-trinh-uu-dai",
    icon: <DiscountIcon sx={{ color: "#FF566A" }}></DiscountIcon>,
  },
  {
    name: "Chính sách đổi trả",
    href: "/chinh-sach-doi-tra",
    icon: <AssignmentReturnIcon />,
  },
  {
    name: "Chính sách bảo mật",
    href: "/chinh-sach-bao-mat",
    icon: <PrivacyTipIcon />,
  },
];

const navItems3 = [
  {
    name: "Nước hoa nam",
    href: "/category/nuoc-hoa-nam",
  },
  {
    name: "Nước hoa nữ",
    href: "/category/nuoc-hoa-nu",
  },
  {
    name: "Nước hoa unisex",
    href: "/category/nuoc-hoa-unisex",
  },
  {
    name: "Yêu thích nhất",
    href: "/category/yeu-thich-nhat",
  },
  {
    name: "Sản phẩm mới",
    href: "/category/san-pham-moi",
  },
  {
    name: "Tất cả sản phẩm",
    href: "/category/tat-ca-san-pham",
  },
];

const MenuHeader: React.FC<{ open: boolean; setOpen: any }> = ({
  open,
  setOpen,
}) => {
  const theme = useTheme();

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const toggleDrawer = () => {
    setOpen((prev: any) => !prev);
  };

  const [expanded, setExpanded] = React.useState<boolean>(false);

  const handleChange = (event: React.SyntheticEvent) => {
    setExpanded(!expanded);
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      anchor="left"
      open={open}
      onClose={toggleDrawer}
    >
      <DrawerHeader>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            display: "flex",
            alignItems: "center",
            maxWidth: "80px",
            margin: "0 auto",
          }}
        >
          <img width={"100%"} src="/assets/dark-logo.png" />
        </Typography>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {navItems1.map((item, index) => (
          <ListItem key={index} disablePadding onClick={toggleDrawer}>
            <ListItemButton href={item.href}>
              <ListItemIcon sx={{ color: "var(--primary-color)" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                sx={{
                  textTransform: "capitalize",
                  span: {
                    fontWeight: "500",
                  },
                }}
                primary={item.name}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              paddingTop: 0,
              paddingBottom: 0,
              display: "block",
            }}
          >
            <Accordion
              expanded={expanded}
              onChange={handleChange}
              sx={{
                boxShadow: "none",
                "*": {
                  margin: 0,
                  padding: 0,
                  height: "100%",
                },
                padding: 0,
                backgroundColor: "unset",
              }}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  padding: 0,
                }}
              >
                <ListItemIcon sx={{ color: "var(--primary-color)" }}>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    textTransform: "capitalize",
                    span: {
                      fontWeight: "500",
                    },
                  }}
                  primary={"Nước hoa"}
                />
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  {navItems3.map((item, index) => (
                    <ListItem key={index} disablePadding onClick={toggleDrawer}>
                      <ListItemButton href={item.href} sx={{ padding: 1.5 }}>
                        <ListItemIcon sx={{ color: "var(--primary-color)" }}>
                          <i
                            style={{ fontSize: "1.5rem" }}
                            className="ri-ink-bottle-fill"
                          ></i>
                        </ListItemIcon>
                        <ListItemText
                          sx={{
                            textTransform: "capitalize",
                            span: {
                              fontWeight: "500",
                            },
                          }}
                          primary={item.name}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          </ListItemButton>
        </ListItem>
        {navItems2.map((item, index) => (
          <ListItem key={index} disablePadding onClick={toggleDrawer}>
            <ListItemButton href={item.href}>
              <ListItemIcon sx={{ color: "var(--primary-color)" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                sx={{
                  textTransform: "capitalize",
                  span: {
                    fontWeight: "500",
                  },
                }}
                primary={item.name}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default MenuHeader;
