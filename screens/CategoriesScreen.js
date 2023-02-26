import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

export default function CategoriesScreen({ navigation }) {
  
  function renderCategoryItem({ item }) {
    const handlePress = () => {
      navigation.navigate("Meals Overview", {itemId: item.id});
    };
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        handlePress={handlePress}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
}