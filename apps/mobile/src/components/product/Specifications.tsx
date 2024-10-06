import { View, Text, StyleSheet } from "react-native";
import COLORS from "../../data/constants/Colors";
import type { SpecificationsProps } from "./types";

export default function Specifications({ product }: SpecificationsProps) {
  return (
    <View style={styles.container}>
      {product?.specifications &&
        Object.keys(product?.specifications!)
          .filter((k) => k !== "destaque")
          .map((key) => (
            <View key={key} style={styles.specifications}>
              <Text style={styles.name}>{key}</Text>
              <Text style={styles.value}>{product?.specifications[key]}</Text>
            </View>
          ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  specifications: {
    flexDirection: "row",
    gap: 10,
  },
  name: {
    color: "white",
    width: "35%",
    backgroundColor: COLORS.PRIMARY,
    padding: 8,
    borderRadius: 6,
  },
  value: {
    flex: 1,
    color: "white",
    backgroundColor: COLORS.PRIMARY,
    padding: 8,
    borderRadius: 6,
  },
});
