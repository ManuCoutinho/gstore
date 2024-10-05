import type { Product } from "../product";
import type CartItem from "./CartItem";

export default class Cart {
  constructor(readonly items: CartItem[] = []) {}
  addItem(product: Product): Cart {
    const item = this.itemByProduct(product);
    if (item) {
      return new Cart(this.updateItemQuantity(this.items, product, 1));
    } else {
      return new Cart([...this.items, { product, quantity: 1 }]);
    }
  }

  removeItem(product: Product) {
    const item = this.itemByProduct(product);
    if (!item) return this;

    return new Cart(this.updateItemQuantity(this.items, product, 1));
  }

  removeProduct(product: Product) {
    const item = this.itemByProduct(product);

    if (!item) return this;

    return new Cart(this.items.filter((f) => f.product.id === product.id));
  }

  clear() {
    return new Cart();
  }

  get itemsQty() {
    return this.items.map((item) => item.quantity).reduce((a, b) => a + b, 0);
  }

  get totalAmount() {
    return this.items
      .map((item) => item.product.promotionalPrice * item.quantity)
      .reduce((a, b) => a + b, 0);
  }

  get totalFullPrice() {
    return this.items
      .map((item) => item.product.promotionalPrice * item.quantity)
      .reduce((a, b) => a + b, 0);
  }

  private itemByProduct(product: Product): CartItem | undefined {
    return this.items.find((item) => item.product.id === product.id);
  }

  private updateItemQuantity(
    items: CartItem[],
    product: Product,
    result: number
  ): CartItem[] {
    return items
      .map((i) =>
        i.product.id === product.id
          ? { ...i, quantity: i.quantity + result }
          : i
      )
      .filter((i) => i.quantity > 0);
  }
}
