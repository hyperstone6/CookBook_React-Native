import { useLayoutEffect, useContext } from "react";
import { Text, ScrollView, Image, StyleSheet, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import HeaderButton from "../components/headerButton";
import List from "../components/MealDetail/List";
import { FavoritesContext } from "../store/context/context";

const MealDetailsScreen = ({ route, navigation }) => {
  const itemId = route.params.itemId;
  const favoriteMealsContext = useContext(FavoritesContext);

  const mealIsFavorite = favoriteMealsContext.ids.includes(itemId);

  const title = MEALS.find((item) => item.id === itemId).title;

  const handleFavoriteStatus = () => {
    if (mealIsFavorite) {
      favoriteMealsContext.removeFavorite(itemId);
    } else {
      favoriteMealsContext.addFavorite(itemId);
    }
  };

  useLayoutEffect(() => {
    const headerButton = () => (
      <HeaderButton
        handlePress={handleFavoriteStatus}
        color={mealIsFavorite ? "gold" : "hsl(0, 0%, 80%)"}
        size={24}
        icon="star"
      />
    );

    navigation.setOptions({
      title: title,
      headerRight: headerButton,
    });
  });

  const selectedMeal = MEALS.find((item) => item.id === itemId);

  return (
    <ScrollView style={styles.main}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <View style={styles.detailsContainer}>
        <Text style={styles.titleText}>{selectedMeal.title}</Text>
        <MealDetails
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          duration={selectedMeal.duration}
          textColor={styles.textColor}
          mealInfoExtraStyle={styles.mealInfoExtraStyle}
        />
        <Subtitle>Ingredients</Subtitle>
        <View style={styles.underline}></View>
        <List data={selectedMeal.ingredients} />
        <Subtitle>Steps</Subtitle>
        <View style={styles.underline}></View>
        <List data={selectedMeal.steps} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 350,
  },
  detailsContainer: {
    marginHorizontal: 30,
  },
  underline: {
    borderBottomColor: "hsl(23, 56%, 74%)",
    borderBottomWidth: 2,
    margin: 6,
    marginHorizontal: 24,
  },

  titleText: {
    fontSize: 24,
    textAlign: "center",
    marginVertical: 8,
    color: "white",
    fontWeight: "bold",
  },
  textColor: {
    color: "white",
  },
  mealInfoExtraStyle: {
    marginBottom: 16,
  },
});

export default MealDetailsScreen;
