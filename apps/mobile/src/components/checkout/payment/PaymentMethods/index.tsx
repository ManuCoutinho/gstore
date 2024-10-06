import { View, StyleSheet } from "react-native";
import { PaymentMethod } from "@gstore/core";
import { Item } from "./Item";
import { PaymentMethodsProps } from "../types";

export default function PaymentMethods({
  paymentMethod = PaymentMethod.PIX,
  updatePayment,
}: PaymentMethodsProps) {
  return (
    <View style={styles.container}>
      <Item
        label="Pagamento no PIX"
        method={PaymentMethod.PIX}
        selectedMethodPayment={paymentMethod}
        updatePayment={updatePayment}
      />
      <Item
        label="Boleto Bancário"
        method={PaymentMethod.TICKET}
        selectedMethodPayment={paymentMethod}
        updatePayment={updatePayment}
      />
      <Item
        label="Cartão de Crédito"
        method={PaymentMethod.CARD}
        selectedMethodPayment={paymentMethod}
        updatePayment={updatePayment}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
