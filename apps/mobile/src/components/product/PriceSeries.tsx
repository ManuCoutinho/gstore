import { Fontisto, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet } from "react-native";
import COLORS from "@/src/data/constants/Colors";
import type { PriceSeriesProps } from "./types";

export default function PriceSeries({ product }: PriceSeriesProps) {
  const {
    minorPrice: min,
    majorPrice: max,
    promotionalPrice: current,
    commonPrice: average,
  } = product;

  let percentage;
  if (current > average) {
    percentage = ((current - average) / (max - average)) * 50 + 50;
  } else {
    percentage = (1 - (average - current) / (average - min)) * 50;
  }

  return (
    <View style={styles.container}>
      <View style={styles.statusPrice}>
        {percentage >= 40 && percentage < 60 ? (
          <Fontisto name="confused" size={40} style={{ color: "#eab308" }} />
        ) : percentage >= 60 ? (
          <Fontisto name="mad" size={40} style={{ color: "#ef4444" }} />
        ) : (
          <Fontisto name="smiley" size={40} style={{ color: "#22c55e" }} />
        )}
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "white" }}>O preço do produto está </Text>
            <Text
              style={{
                color: COLORS.TEXT_EMPHASIS_1,
                fontWeight: "bold",
              }}
            >
              {percentage >= 40 && percentage < 60
                ? "na média"
                : percentage >= 60
                  ? "acima da média"
                  : "abaixo da média"}
            </Text>
          </View>
          <Text style={{ color: "white" }}>
            Com base no preço dos últimos 30 dias.
          </Text>
        </View>
      </View>
      <View style={{ position: "relative" }}>
        <LinearGradient
          colors={["#22c55e", "#facc15", "#ef4444"]}
          start={{ x: 0, y: 0.75 }}
          end={{ x: 1, y: 0.25 }}
          style={styles.priceBar}
        ></LinearGradient>
        <View style={{ ...styles.positionPrice, left: `${percentage}%` }}>
          <Ionicons
            name="chevron-down"
            size={20}
            style={{ color: COLORS.TEXT_EMPHASIS_1 }}
          />
          <View style={styles.externalPriceCircle}>
            <View style={styles.internPriceCircle} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  statusPrice: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  priceBar: {
    position: "relative",
    height: 7,
    borderRadius: 9999,
  },
  positionPrice: {
    position: "absolute",
    alignItems: "center",
    top: -25,
  },
  externalPriceCircle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: 18,
    width: 18,
    borderRadius: 9999,
  },
  internPriceCircle: {
    backgroundColor: COLORS.TEXT_EMPHASIS_1,
    height: 13,
    width: 13,
    borderRadius: 9999,
  },
});
