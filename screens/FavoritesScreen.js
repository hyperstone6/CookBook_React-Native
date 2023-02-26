import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/context";
import MealsList from "../components/MealsList";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = () => {
  const favoriteMealsContext = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsContext.ids.includes(meal.id)
  );

  return favoriteMeals.length > 0 ? (
    <MealsList items={favoriteMeals} />
  ) : (
    <View style={styles.favoritesTextContainer}>
      <Text style={styles.favoritesText}>You haven't selected any favorites.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    favoritesTextContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
  favoritesText: {
    color: "white",
    fontSize: 18,
    fontWeight: 'bold'
  },
});

export default FavoritesScreen;
