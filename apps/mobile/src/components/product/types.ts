import type { Product } from "@gstore/core";

export type UsersReviewsProps = {
  rate: Product["rate"];
};

export type BannerShopProps = {
  product: Product;
};

export type SpecificationsProps = {
  product: Product;
};

export type PriceSeriesProps = {
  product: Product;
};

export type ProductItemProps = {
  product: Product;
  selectProduct?: (product: Product) => void;
}