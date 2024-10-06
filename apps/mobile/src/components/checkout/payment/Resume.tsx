import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Currency } from "@gstore/core";
import COLORS from "@/src/data/constants/Colors";
import type { ResumeCheckoutProps } from "./types";

export default function CheckoutResume({
  checkout,
  fullValue,
  itemsQty,
}: ResumeCheckoutProps) {
  return (
    <View style={styles.container}>
      <View style={styles.itemsValue}>
        <Text style={{ color: "white" }}>Valor total ({itemsQty} itens): </Text>
        <Text style={styles.itemsValueEmphasis}>
          {Currency.format(fullValue)}
        </Text>
      </View>
      <Pressable style={styles.button} onPress={() => checkout?.()}>
        <Ionicons name="cart-outline" size={22} style={styles.textButton} />
        <Text style={styles.textButton}>Finalizar Compra</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    margin: 20,
    paddingHorizontal: 60,
    paddingVertical: 20,
    backgroundColor: "#241440",
    borderRadius: 10,
    gap: 10,
  },
  itemsValue: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemsValueEmphasis: {
    color: "#34d399",
    fontWeight: "bold",
  },
  button: {
    color: "#FFF",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 9999,
    height: 40,
    paddingHorizontal: 45,
    gap: 8,
  },
  textButton: {
    color: "#FFF",
  },
});
