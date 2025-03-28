import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ProductProps, StoreContextAPI } from "./types";
import productService from "./services";
import { useLocation } from "react-router-dom";

const StoreContext = createContext<StoreContextAPI>({} as StoreContextAPI);

export const PRODUCT = {
  id: "",
  name: "",
  prices: [],
  description: "",
  images: [],
  gender: "",
  brand: "",
  isNew: true,
  isHot: true,
  slug: "",
};

const Provider: React.FC<{ children: any }> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [product, setProduct] = useState<ProductProps>(PRODUCT);
  const { pathname } = useLocation();

  const getProducts = () => {
    setLoading(true);
    productService
      .getProducts()
      .then((res) => setProducts(res))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  const getProductsByKey = (key: string, value: string | boolean) => {
    return products.filter(
      (item) => item[key as keyof typeof PRODUCT] === value
    );
  };

  const getProductBySlug = (slug: string) => {
    if (products.length > 0) {
      const found = products.find((item) => item.slug === slug);

      if (found) {
        setProduct(found);
      } else {
        window.location.href = "/";
      }
    }
  };

  const setLocalStorage = (productIds: string[]) => {
    localStorage.setItem("cart", JSON.stringify(productIds));
  };

  const getLocalStorage = () => {
    return localStorage.getItem("cart");
  };

  const getCart = () => {
    const productIds = getLocalStorage();
    if (productIds) {
      return JSON.parse(productIds);
    }

    return [];
  };

  const setCard = (productId: string) => {
    const arr = getCart();
    arr.push(productId);
    setLocalStorage(arr);
  };

  const getGift = () => {
    return localStorage.getItem("gift");
  };

  const setGift = (gift: any) => {
    const str = getGift();

    if (str) {
      const arr = [...JSON.parse(str)];
      arr.push(gift);
      return localStorage.setItem("gift", JSON.stringify(arr));
    }

    return localStorage.setItem("gift", JSON.stringify([gift]));
  };

  useEffect(() => {
    if (products.length <= 0) {
      getProducts();
    }
  }, [pathname]);

  const memoValue = useMemo(
    () => ({
      loading,
      setLoading,
      error,
      products,
      product,
      getProducts,
      getProductsByKey,
      getProductBySlug,
      setLocalStorage,
      getLocalStorage,
      getCart,
      setCard,
      setGift,
      getGift,
    }),
    [product, products]
  );

  return (
    <StoreContext.Provider value={memoValue}>{children}</StoreContext.Provider>
  );
};

export const useStore = (): StoreContextAPI => useContext(StoreContext);

export default Provider;
