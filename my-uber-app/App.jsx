import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation/Index";

export default function App() {
  return (
    <NavigationContainer className="mt-10">
      <RootNavigator />
      {/* <StatusBar style="auto" /> */}
    </NavigationContainer>
  );
}
