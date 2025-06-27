import React, { ChangeEvent, SyntheticEvent, useEffect } from "react";
import { Box, Divider, TextField, styled } from "@mui/material";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import { CustomBtn } from "./Product";
import { FANPAGE, FormatMoney, PHONE_NUMBER } from "../Helper/Helper";
import { useParams, useSearchParams } from "react-router-dom";
import { useStore } from "../context";
import TagHeader from "../components/TagHeader";

const Textarea = styled(BaseTextareaAutosize)(
  ({ theme }) => `
        width: 100%;
        font-family: IBM Plex Sans, sans-serif;
        font-size: var(--normal-fontsize);
        font-weight: 400;
        line-height: 1.5;
        padding: 8px 12px;
        margin: 7px;
        border-radius: 8px;
        color: var(--secondary-color);
        border: 1px solid #434D5B;
    
        &:hover {
          border-color: var(--secondary-color);
        }     
        
        &:focus {
          border-color: var(--secondary-color);
        }
    
        // firefox
        &:focus-visible {
          outline: 0;
        }
      `
);

const Info = {
  title: "Thơm Parfum - Xác nhận đơn hàng",
  desc: "Thomparfum.com - Cửa hàng nước hoa chính hãng, uy tín tại TPHCM, chuyên cung cấp các sản phẩm nước hoa chính hãng với giá phù hợp.",
};

const Checkout = () => {
  const { products, setCard, getCart } = useStore();
  const { slug } = useParams();
  const [sizeParams, setSizeParams] = useSearchParams();
  const text = sizeParams.get("size");
  const [product, setProduct] = React.useState({
    id: "",
    name: "",
    capacity: "",
    price: "",
    salePrice: "",
    image: "",
    gender: "",
    brand: "",
    status: true,
  });
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | boolean>(false);
  const [input, setInput] = React.useState({
    name: "",
    phoneNumber: "",
    address: "",
  });
  const [gifts, setGifts] = React.useState<any>([]);
  const { getGift } = useStore();

  const getGiftFromLocal = () => {
    const arrGifts = getGift();

    if (arrGifts) {
      const list = JSON.parse(arrGifts);
      const arr: any[] = [];
      list.forEach((element: any) => {
        arr.push(element.option);
      });
      setGifts(arr);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "phoneNumber") {
      isValidPhone(value);
    }
    setInput((prevState) => ({ ...prevState, [name]: value }));
  };

  const isOrdered = () => {
    const arr = getCart();
    if (arr) {
      return arr.map((item) => JSON.parse(item).info.phoneNumber);
    }

    return;
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const cart = {
      ...input,
      sanpham: product.name + " " + product.capacity,
      isOrdered: isOrdered(),
      // gifts: JSON.stringify(gifts),
    };

    const formDataJsonString = JSON.stringify(cart);

    setLoading(true);

    fetch(
      "https://api.sheetbest.com/sheets/d23aebcd-0e80-487e-bc71-1820e03acac4",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "post",
        body: formDataJsonString,
      }
    )
      .then((res) => {
        if (res.ok) {
          setCard(
            JSON.stringify({
              id: product.id,
              capacity: product.capacity,
              info: input,
            })
          );

          return res.json();
        }

        throw new Error("Something went wrong");
      })
      .then(() => (window.location.href = "/order-completed"))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getGiftFromLocal();
    const found = products.find((item) => {
      let temp: any;
      if (item.slug === slug) {
        item.prices.forEach((element) => {
          if (element.capacity === text) {
            setProduct((prev) => ({
              ...prev,
              capacity: element.capacity,
              price: element.price,
              salePrice: element.salePrice,
              image: item.prices[0].image,
            }));

            temp = item;
          }
        });
      }

      return temp;
    });
    if (found) {
      return setProduct((prevState: any) => ({
        ...prevState,
        id: found.id,
        name: found.name,
        gender: found.gender,
        brand: found.brand,
        status: true,
      }));
    }

    return;
  }, [products]);

  const isValidPhone = (phone: string) =>
    setError(!/((^(\+84|84|0|0084){1})(3|5|7|8|9))+([0-9]{8})$/.test(phone));

  return (
    <div className="product container">
      <TagHeader {...Info} />
      <div className="checkout">
        <div className="title">Xác nhận đơn hàng</div>
        <Box flexGrow={1} className="checkout__container">
          <Box>
            <div>Thông tin sản phẩm</div>
            <div className="checkout__bill">
              <img
                src={`https://lh3.googleusercontent.com/d/${product.image}`}
                alt=""
                className="checkout__bill-img"
              />
              <div>
                <div className="checkout__bill-title">{product.name}</div>
                <div className="checkout__bill-capacity">{text}</div>
              </div>
              <div className="product__price checkout__bill-salePrice">
                <FormatMoney price={product.salePrice || product.price} />
              </div>
            </div>
          </Box>
          {gifts.length > 0 && product.capacity !== "10ml" && (
            <div className="form_gift">
              <div className="form_gift-title">Quà tặng kèm từ vòng quay</div>
              {gifts.map((item: any) => {
                if (item !== "Mất lượt") return <div key={item}>- {item}</div>;
              })}
            </div>
          )}
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1 },
              marginTop: 3,
            }}
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <div>Thông tin giao hàng</div>
            <Divider />
            <Box display="flex" justifyContent="center">
              <TextField
                required
                id="outlined-required"
                label="Họ và tên"
                defaultValue=""
                fullWidth
                name="name"
                onChange={handleChange}
                color="primary"
              />
              <TextField
                required
                id="outlined-required"
                label="Số điện thoại"
                defaultValue=""
                fullWidth
                name="phoneNumber"
                onChange={handleChange}
                helperText={
                  error === true &&
                  "Số điện thoại bị sai. Vui lòng kiểm tra lại!"
                }
                error={error === true}
                color="primary"
              />
            </Box>
            <Box display="flex" justifyContent="center">
              <Textarea
                aria-label="minimum height"
                minRows={3}
                placeholder="Địa chỉ nhận hàng"
                name="address"
                onChange={handleChange}
                required
              />
            </Box>
            <Box
              flexGrow={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <img src="https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=4" />
              <p style={{ marginLeft: "10px" }}>
                (COD) Thanh toán khi nhận hàng
              </p>
            </Box>
            <Divider sx={{ marginTop: "10px" }} />
            <div className="view__shipping">
              <div>
                <i className="ri-truck-line"></i>
                <div>Freeship toàn quốc</div>
              </div>
              <div>
                <i className="ri-shield-check-line"></i>
                <div>Chính hãng 100%</div>
              </div>
              <div>
                <i className="ri-refund-line"></i>
                <div>Miễn phí đổi trả</div>
              </div>
            </div>
            <Divider />
            {typeof error === "string" && (
              <Box sx={{ padding: 2, color: "var(--price-color)" }}>
                Đã xảy ra lỗi, hay liên hệ về{" "}
                <a target="_blank" href={FANPAGE} rel="noreferrer">
                  fanpage
                </a>{" "}
                hoặc liên hệ trực tiếp{" "}
                <a
                  target="_blank"
                  href={`tel:${PHONE_NUMBER}`}
                  rel="noreferrer"
                >
                  {PHONE_NUMBER}
                </a>{" "}
                để được hỗ trợ 😵
              </Box>
            )}
            <CustomBtn
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              disabled={loading || error === true}
              sx={{ marginTop: 2 }}
            >
              {loading ? "đang xác nhận..." : "Xác nhận đơn hàng"}
            </CustomBtn>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Checkout;
