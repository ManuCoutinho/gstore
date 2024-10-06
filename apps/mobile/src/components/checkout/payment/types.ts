import { DeliveryOrder, Installment, PaymentMethod } from "@gstore/core";

export type PaymentMethodsProps = {
  paymentMethod?: PaymentMethod;
  updatePayment?: (value: PaymentMethod) => void;
  className?: string;
};

export type PaymentItemProps = {
  label: string;
  method: PaymentMethod;
  selectedMethodPayment: PaymentMethod;
  updatePayment?: (value: PaymentMethod) => void;
};

export type ResumeCheckoutProps = {
  itemsQty: number;
  total: number;
  fullValue: number;
  installment: Installment;
  checkout: () => void;
  className?: string;
};

export type  DeliveryFormProps ={
  delivery: Partial<DeliveryOrder>;
  updateDelivery: (delivery: Partial<DeliveryOrder>) => void;
  className?: string;
}