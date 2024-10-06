import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useCart } from "@/src/data/hooks/useCart";
import { useInstallments } from "@/src/data/hooks/useInstallments";
import { Currency } from "@gstore/core";
import COLORS from "@/src/data/constants/Colors";
import type { BannerShopProps } from "./types";

export default function BBannerShop({ product }: BannerShopProps) {
  const { addItem } = useCart();
  const installment = useInstallments(product.promotionalPrice);

  return (
    <View style={styles.container}>
      <View style={styles.priceContainer}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            borderRightWidth: 3,
            borderRightColor: COLORS.PRIMARY,
          }}
        >
          <Text style={styles.fullPrice}>de R$ {product?.commonPrice}</Text>
          <View style={styles.promotionalPrice}>
            <Text style={styles.value}>por</Text>
            <Text style={styles.emphasisPrice}>
              {Currency.format(product?.promotionalPrice)}
            </Text>
          </View>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={styles.value}>
            até {installment.installmentsQty}x de
          </Text>
          <Text style={styles.value}>
            {Currency.format(installment.installmentValue)}
          </Text>
        </View>
      </View>
      <View style={{ gap: 10 }}>
        <Pressable
          onPress={() => addItem(product)}
          style={{ ...styles.button, backgroundColor: COLORS.PRIMARY }}
        >
          <Ionicons style={styles.textButton} name="cart-outline" size={20} />
          <Text style={styles.textButton}>Adicionar</Text>
        </Pressable>
        <Pressable
          onPress={() => {}}
          style={{
            ...styles.button,
            backgroundColor: COLORS.SECONDARY,
          }}
        >
          <Ionicons style={styles.textButton} name="card-outline" size={20} />
          <Text style={styles.textButton}>Comprar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    gap: 30,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  fullPrice: {
    textDecorationLine: "line-through",
    color: "#C4C4C4",
  },
  promotionalPrice: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 8,
  },
  value: {
    fontSize: 16,
    color: "white",
  },
  emphasisPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.TEXT_EMPHASIS_1,
  },
  button: {
    color: "#FFF",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 9999,
    height: 35,
    paddingHorizontal: 80,
    gap: 8,
  },
  textButton: {
    color: "#FFF",
  },
});
