import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  stepContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  activeCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#FF57A0",
    justifyContent: "center",
    alignItems: "center",
  },
  inactiveCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
  },
  activeCircleText: {
    color: "white",
    fontSize: 12,
  },
  inactiveCircleText: {
    color: "#000",
    fontSize: 12,
  },
  textActive: {
    color: "#FF57A0",
    marginLeft: 10,
    fontWeight: "400",
  },
  textInactive: {
    color: "#888",
    marginLeft: 10,
    fontWeight: "400",
  },
  divisor: {
    width: 40,
    height: 1,
    backgroundColor: "#888",
    marginHorizontal: 15,
  },
});
