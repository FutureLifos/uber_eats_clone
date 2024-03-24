import { Amplify } from "aws-amplify";
import amplifyconfig from "./src/amplifyconfiguration.json";
Amplify.configure(amplifyconfig);
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation/Index";
// import {
//   withAuthenticator,
//   // useAuthenticator,
// } from "@aws-amplify/ui-react-native";

function App() {
  return (
    <NavigationContainer className="mt-10">
      <RootNavigator />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

export default App;
// export default withAuthenticator(App);
