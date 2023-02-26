import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealsList";

const MealsOverview = ({ route, navigation }) => {
  const itemId = route.params.itemId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(itemId) >= 0;
  });

  useLayoutEffect(() => {
    const categoriesTitle = CATEGORIES.find((cat) => cat.id === itemId).title;

    navigation.setOptions({
      title: categoriesTitle,
    });
  }, [navigation, itemId]);
  return (
    <MealsList items={displayedMeals} />
  )
  
};

export default MealsOverview;
