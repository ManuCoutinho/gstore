import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Pressable,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useCart } from "@/src/data/hooks/useCart";
import CheckoutHeader from "@/src/components/checkout/Header";
import Cart from "../../components/checkout/cart/CartItem";
import CartEmpty from "@/src/components/checkout/cart/CartEmpty";
import COLORS from "@/src/data/constants/Colors";
import type { CartItem } from "@gstore/core";

export default function CartPage({ navigation }: any) {
  const { items, itemsQty, addItem, removeItem, removeProduct } = useCart();

  return (
    <SafeAreaView style={styles.container}>
      <CheckoutHeader />
      <ScrollView
        contentContainerStyle={{ paddingVertical: 20, width: "100%" }}
      >
        {items.length === 0 && <CartEmpty />}
        {items.map((item: CartItem) => (
          <Cart
            key={item.product.id}
            item={item}
            addItem={() => addItem(item.product)}
            removeItem={() => removeItem(item.product)}
            removeProduct={() => removeProduct(item.product)}
          />
        ))}
      </ScrollView>
      {itemsQty > 0 && (
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Pagamento")}
        >
          <Ionicons name="card-outline" size={22} style={styles.buttonText} />
          <Text style={styles.buttonText}>Continuar</Text>
        </Pressable>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0E001D",
    width: "100%",
  },
  button: {
    color: "#FFF",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.PRIMARY,
    alignSelf: "center",
    borderRadius: 9999,
    height: 40,
    marginVertical: 20,
    paddingHorizontal: 50,
    gap: 8,
  },
  buttonText: {
    color: "#FFF",
  },
});
