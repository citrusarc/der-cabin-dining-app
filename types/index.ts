export type MenuCategory =
  | "Pasta Parade"
  | "Chicken Corner"
  | "Grill & Steak"
  | "From the Sea"
  | "Burger Bliss"
  | "Sides & Snacks"
  | "Mac & Cheese"
  | "Kids' Menu"
  | "Beverages";

export interface MenuPrice {
  currency: string;
  original: number;
  current: number;
}

export interface MenuItem {
  id: string;
  name: string;
  image: string;
  description?: string;
  category: MenuCategory;
  price: MenuPrice;
}
