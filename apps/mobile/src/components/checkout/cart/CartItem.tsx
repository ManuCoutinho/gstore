import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Currency } from "@gstore/core";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { CartItemProps } from "./types";

export default function CartItem({
  addItem,
  item,
  removeItem,
  removeProduct,
}: CartItemProps) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.product.image }}
        style={styles.image}
        alt="Imagem do Produto"
      />
      <View style={styles.productInfo}>
        <Text style={styles.name}>{item.product.name}</Text>
        <View style={styles.containerQty}>
          <View style={styles.quantity}>
            <Pressable
              onPress={removeItem}
              style={[styles.qtyButton, styles.minusButton]}
            >
              <AntDesign name="minus" size={16} color="#FFF" />
            </Pressable>
            <Text style={styles.qtyValue}>{item.quantity}</Text>
            <Pressable
              onPress={addItem}
              style={[styles.qtyButton, styles.plusButton]}
            >
              <AntDesign name="plus" size={16} color="#FFF" />
            </Pressable>
          </View>
          <Pressable onPress={removeProduct} style={styles.deleteButton}>
            <Ionicons name="trash-outline" size={16} color="#ff2777" />
            <Text style={{ color: "#ff2777" }}>Remover</Text>
          </Pressable>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.fullPrice}>
            De {Currency.format(item.product.commonPrice)}
          </Text>
          <View style={{ flexDirection: "row", gap: 4 }}>
            <Text style={{ color: "white" }}>Por</Text>
            <Text style={styles.price}>
              {Currency.format(item.product.promotionalPrice)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#241440",
    borderRadius: 8,
    padding: 16,
    marginVertical: 10,
    width: "95%",
    alignSelf: "center",
  },
  checkboxContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    width: 30,
    height: 30,
    backgroundColor: "#333",
    borderRadius: 4,
  },
  image: {
    width: 120,
    height: 120,
    marginRight: 15,
  },
  productInfo: {
    flex: 1,
    justifyContent: "space-between",
    gap: 6,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 5,
  },
  fullPrice: {
    fontSize: 10,
    color: "#AAA",
    textDecorationLine: "line-through",
    marginBottom: 5,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    gap: 4,
  },
  price: {
    fontSize: 14,
    color: "#FFF",
    fontWeight: "bold",
  },
  containerQty: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  quantity: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#FFF",
    borderWidth: 1,
    borderRadius: 6,
  },
  qtyButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 25,
    height: 25,
    borderColor: "#FFF",
  },
  minusButton: {
    borderRightWidth: 1,
  },
  plusButton: {
    borderLeftWidth: 1,
  },
  deleteButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  qtyValue: {
    marginHorizontal: 10,
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold",
  },
});
