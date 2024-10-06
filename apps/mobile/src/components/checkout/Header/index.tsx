import React from "react";
import { View } from "react-native";
import { HeaderItem } from "./Item";
import { styles } from "./styles";

export default function HeaderCheckout() {
  return (
    <View style={styles.container}>
      <HeaderItem index={1} title="Carrinho" step="cart" />
      <View style={styles.divisor} />
      <HeaderItem index={2} title="Pagamento" step="payment" />
    </View>
  );
}
