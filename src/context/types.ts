export interface PriceProps {
  capacity: string;
  price: string;
  salePrice: string;
  image: string;
  status: boolean;
}

export interface ProductProps {
  id: string;
  name: string;
  prices: PriceProps[];
  description: string;
  images: string[];
  gender: string;
  brand: string;
  isNew: boolean;
  isHot: boolean;
  slug: string;
}

// export interface StoreProviderState {
//   loading: boolean;
//   setLoading: any;
//   error?: string;
//   products: ProductProps[];
//   setProducts: any;
// }

export interface StoreContextAPI {
  loading: boolean;
  setLoading: any;
  error?: string;
  product: ProductProps;
  products: ProductProps[];
  getProducts: () => void;
  getProductsByKey: (key: string, value: string | boolean) => ProductProps[];
  getProductBySlug: (slug: string) => void;
  setLocalStorage: (productIds: string[]) => void;
  getLocalStorage: () => string | null;
  getCart: () => any[];
  setCard: (productId: string) => void;
  setGift: (gift: any) => void;
  getGift: () => string | null;
}
