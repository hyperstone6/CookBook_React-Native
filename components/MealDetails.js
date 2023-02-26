import { Text, View, StyleSheet } from "react-native";

const MealDetails = ({
  complexity,
  affordability,
  duration,
  textColor,
  mealInfoExtraStyle,
}) => {


  return (
    <View style={[styles.mealInfo, mealInfoExtraStyle]}>
      <Text style={[styles.infoText, textColor]}>{duration}M</Text>
      <Text style={[styles.infoText, textColor]}>
        {affordability.toUpperCase()}
      </Text>
      <Text style={[styles.infoText, textColor]}>
        {complexity.toUpperCase()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mealInfo: {
    margin: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  infoText: {
    marginHorizontal: 8,
    fontSize: 12,
  },
});

export default MealDetails;
