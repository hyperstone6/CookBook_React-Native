import { View, FlatList } from "react-native";
import MealItem from "./MealItem";
import { useNavigation } from "@react-navigation/native";

const MealsList = ({items}) => {

  const navigation = useNavigation()

  const renderMealItem = ({ item }) => {
    const mealTimeProps = {
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
      imageUrl: item.imageUrl,
      title: item.title,
      itemId: item.id,
      navigation: navigation,
    };
    return <MealItem {...mealTimeProps} />;
  };

  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsList;
