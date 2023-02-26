import { View, Text, Pressable, StyleSheet, Platform } from "react-native";
import findComplementaryColors from "../utils/complementaryColors";

export default function CategoryGridTile({ title, color, handlePress }) {
  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable
        android_ripple={{ color: findComplementaryColors(color) }}
        onPress={handlePress}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 6,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.select({ android: "hidden", ios: "visible" }),
  },
  button: { flex: 1 },
  buttonPressed: {
    opacity: Platform.select({ android: 1, ios: 0.5 }),
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
