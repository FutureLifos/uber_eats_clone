import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen/Index";
import RestaurantDetailsPage from "../screens/RestaurantDetailsScreen.jsx/Index";

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      className="pt-6 border border-red-500"
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Restaurant"
        // options={{
        //   headerShown: false,
        // }}
        component={RestaurantDetailsPage}
      />
    </Stack.Navigator>
  );
}

export default RootNavigator;
