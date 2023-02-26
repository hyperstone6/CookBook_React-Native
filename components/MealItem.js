import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import MealDetails from "../components/MealDetails";

const MealItem = ({
  duration,
  affordability,
  complexity,
  title,
  imageUrl,
  itemId,
  navigation,
}) => {
  const renderMealItem = () => {
    navigation.navigate("MealDetails", { itemId: itemId });
  };
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={renderMealItem}
      >
        <View>
          <View style={styles.innerContainer}>
            <Image
              style={styles.mealImage}
              source={{ uri: imageUrl }}
              resizeMode="cover"
            />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            affordability={affordability}
            complexity={complexity}
          />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 6,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.select({ android: "hidden", ios: "visible" }),
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  mealImage: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    margin: 8,
  },
  buttonPressed: {
    opacity: Platform.select({ android: 1, ios: 0.5 }),
  },
});

export default MealItem;
