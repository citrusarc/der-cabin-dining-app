export type MenuCategory =
  | "Starters"
  | "Pasta"
  | "For Kiddies"
  | "Chicken Feast"
  | "Today’s Specialty"
  | "Burgers"
  | "From The Sea"
  | "Beverages"
  | "Fresh Fruit Juices"
  | "Coffee"
  | "Hot Drinks"
  | "Frappe"
  | "Sparkling Drinks"
  | "Buttercream Series"
  | "Desserts"
  | "Extras";

export interface MenuPrice {
  currency: string;
  original: string;
  current: string;
}

export interface MenuItem {
  id: string;
  name: string;
  image: string;
  description?: string;
  category: MenuCategory;
  price: MenuPrice;
  isDiscount: boolean;
  isBestSeller: boolean;
}
