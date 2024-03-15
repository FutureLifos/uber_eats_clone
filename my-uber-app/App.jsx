import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import RestaurantDetailsPage from "./src/screens/RestaurantDetailsScreen.jsx/Index";
import HomeScreen from "./src/screens/HomeScreen/Index";
import DishDetailsSreen from "./src/screens/DishDetailsScreen/Index";
import OrdersScreen from "./src/screens/OrdersScreen/Index";
import Basket from "./src/screens/Basket/Index";
import OrderDetails from "./src/screens/OrderDetails/Index";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView className="justify-center mt-3 items-center flex-1">
        {/* Restaurant Item */}
        {/* <RestaurantDetailsPage /> */}
        {/* <DishDetailsSreen /> */}
        {/* <Basket /> */}
        {/* <OrdersScreen /> */}
        {/* <OrderDetails /> */}
        {/* <HomeScreen /> */}
        <StatusBar style="auto" />
      </SafeAreaView>
    </NavigationContainer>
  );
}
