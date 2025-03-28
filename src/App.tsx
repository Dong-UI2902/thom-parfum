import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import "react-multi-carousel/lib/styles.css";
import "./styles/Layout.scss";
import "./styles/Home.scss";
import "./styles/Variables.scss";
import "./styles/Base.scss";
import Home from "./views/Home";
import { ThemeProvider, createTheme } from "@mui/material";
import Provider from "./views/Provider";
import Category from "./views/Category";
import Checkout from "./views/Checkout";
import Narciso from "./views/Narciso";
import Privacy from "./views/Privacy";
import Product from "./views/Product";
import Refund from "./views/Refund";
import Thanks from "./views/Thanks";
import WinterCollection from "./views/WinterCollection";
import About from "./views/About";
import ShoppingCart from "./views/ShoppingCart";
import "./styles/Breakpoint.scss";
import Sale from "./views/Sale";
import EventModal from "./components/EventModal";
import LuckyWheel from "./views/LuckyWheel";

const theme = createTheme({
  typography: {
    fontFamily: "var(--body-font)",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  palette: {
    primary: {
      main: "#365949",
    },
  },
});

function App() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Provider>
      <ThemeProvider theme={theme}>
        {/* <EventModal /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gioi-thieu" element={<About />} />
          <Route path="/chinh-sach-doi-tra" element={<Refund />} />
          <Route path="/chinh-sach-bao-mat" element={<Privacy />} />
          <Route path="/category/:key?" element={<Category />} />
          <Route path="/category/chuong-trinh-uu-dai" element={<Sale />} />
          <Route path="/product/:slug" element={<Product />} />
          <Route path="/checkout/:slug" element={<Checkout />} />
          <Route path="/order-completed" element={<Thanks />} />
          <Route path="/narciso" element={<Narciso />} />
          <Route path="/wintercollection" element={<WinterCollection />} />
          <Route path="/gio-hang" element={<ShoppingCart />} />

          <Route path="/vong-quay-may-man" element={<LuckyWheel />} />
        </Routes>
        <Footer />
        <a href="#" className="scrollup" id="scroll-up">
          <i className="ri-arrow-up-line scrollup__icon" />
        </a>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
