export type MenuCategory =
  | "starters"
  | "pasta"
  | "for-kiddies"
  | "chicken-feast"
  | "todays-specialty"
  | "burgers"
  | "from-the-sea"
  | "beverages"
  | "fresh-fruit-juices"
  | "coffee"
  | "hot-drinks"
  | "frappe"
  | "sparkling-drinks"
  | "buttercream-series"
  | "desserts"
  | "extras";

export interface MenuPriceDetail {
  current: string;
  original: string;
}

export interface MenuPrice {
  currency: string;
  standard?: MenuPriceDetail;
  hot?: MenuPriceDetail;
  cold?: MenuPriceDetail;
}

export interface MenuItem {
  id: string;
  name: string;
  label?: string;
  image: string;
  description?: string;
  category: MenuCategory;
  price: MenuPrice;
  isDiscount: boolean;
  isBestSeller: boolean;
}
