export type ItemStatus = {
  isDisabled?: boolean;
  isHidden?: boolean;
  isComingSoon?: boolean;
  isPromo?: boolean;
  isBestSeller?: boolean;
};

export type MenuCategory =
  | "Today’s Specialty"
  | "Starters"
  | "Mixed Grilled"
  | "Chicken Feast"
  | "From The Sea"
  | "Pasta"
  | "Burgers"
  | "For Kiddies"
  | "Extras"
  | "Desserts"
  | "Beverages"
  | "Fresh Fruit Juices"
  | "Sparkling Drinks"
  | "Frappe"
  | "Buttercream Series"
  | "Coffee"
  | "Hot Drinks";

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
  status?: ItemStatus;
}
