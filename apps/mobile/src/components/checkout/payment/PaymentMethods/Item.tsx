import { Pressable, View, Text, StyleSheet } from "react-native";
import { PaymentItemProps } from "../types";

export function Item({
  label,
  method,
  selectedMethodPayment,
  updatePayment,
}: PaymentItemProps) {
  const selected = selectedMethodPayment === method;
  return (
    <Pressable
      key={method}
      style={styles.container}
      onPress={() => updatePayment?.(method)}
    >
      <View style={styles.options}>
        {selected && <View style={styles.selection} />}
      </View>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  options: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#8247E5",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  selection: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#8247E5",
  },
  text: {
    fontSize: 16,
    color: "#FFF",
  },
});
