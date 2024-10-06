import { StyleSheet, View, Image, Text } from "react-native";
import type { ProfileProps } from "./types";

export default function Profile({ email, name, phone }: ProfileProps) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/avatar.png")}
        style={styles.avatar}
      />
      <Text style={styles.emphasis}>Fala, {name}!</Text>
      <Text style={styles.text}>E-mail: {email}</Text>
      <Text style={styles.text}>Telefone: {phone}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 48,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 137,
    height: 134,
    marginRight: 12,
  },
  emphasis: {
    fontSize: 28,
    fontWeight: "600",
    color: "#fff",
    margin: 5,
  },
  text: {
    marginTop: 2,
    fontSize: 18,
    fontWeight: "400",
    color: "#A9A9A9",
  },
  button: {
    margin: 30,
    width: "35%",
    height: 45,
    backgroundColor: "#EF4444",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  textButton: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
