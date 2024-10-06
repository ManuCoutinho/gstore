import { View, Text } from "react-native";
import { styles } from "./styles";
import type { ItemCheckoutProps } from "./types";

export function HeaderItem({ index, step, title } : ItemCheckoutProps) {
  return (
    <View style={styles.stepContainer}>
      <View
        style={
          step === step ? styles.activeCircle : styles.inactiveCircle
        }
      >
        <Text
          style={
            step === step
              ? styles.activeCircleText
              : styles.inactiveCircleText
          }
        >
          {index}
        </Text>
      </View>
      <Text
        style={step === step ? styles.textActive : styles.textInactive}
      >
        {title}
      </Text>
    </View>
  );
}