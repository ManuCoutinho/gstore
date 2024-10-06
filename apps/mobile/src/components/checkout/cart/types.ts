import { CartItem } from "@gstore/core";

export type CartItemProps = {
  item: CartItem;
  addItem: () => void;
  removeItem: () => void;
  removeProduct: () => void;
}
