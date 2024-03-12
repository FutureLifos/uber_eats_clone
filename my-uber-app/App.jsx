import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import RestaurantDetailsPage from "./src/screens/RestaurantDetailsScreen.jsx/Index";
import HomeScreen from "./src/screens/HomeScreen/Index";
import DishDetailsSreen from "./src/screens/DishDetailsScreen/Index";
import Basket from "./src/screens/Basket/Index";

export default function App() {
  return (
    <SafeAreaView className="justify-center mt-6 items-center flex-1">
      {/* Restaurant Item */}
      {/* <RestaurantDetailsPage /> */}
      {/* <DishDetailsSreen /> */}
      <Basket />
      {/* <HomeScreen /> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
