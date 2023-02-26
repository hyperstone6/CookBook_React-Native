import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import FavoritesContextProvider from "./store/context/context";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverview from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        title: "Categories",
        headerStyle: { backgroundColor: "hsl(18, 88%, 16%)" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "hsl(17, 42%, 29%)" },
        drawerContentStyle: { backgroundColor: "hsl(18, 88%, 16%)" },
        drawerInactiveTintColor: "hsl(0, 9%, 72%)",
        drawerActiveBackgroundColor: "hsl(17, 42%, 29%)",
        drawerActiveTintColor: "white",
      }}
    >
      <Drawer.Screen
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" color={"white"} size={24} />
          ),
        }}
        name="DrawerCategories"
        component={CategoriesScreen}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={"white"} size={24} />
          ),
          title: "Favorites",
        }}
        name="Favorites"
        component={FavoritesScreen}
      />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <>
      <StatusBar style="light" />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              title: "Categories",
              headerStyle: { backgroundColor: "hsl(18, 88%, 16%)" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "hsl(17, 42%, 29%)" },
            }}
          >
            <Stack.Screen
              options={{ headerShown: false }}
              name="Categories"
              component={DrawerNavigator}
            />
            <Stack.Screen name="Meals Overview" component={MealsOverview} />
            <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
};

export default App;
